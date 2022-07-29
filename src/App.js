import './assets/css/output.css';
import foundations from './assets/svg/foundations.svg';
import grosoeuvre from './assets/svg/grosoeuvre.svg';
import maconnerie from './assets/svg/maconnerie.svg';
import accompagnement from './assets/svg/accompagnement.svg';

function App() {
  return (
    <div className="App bg-fixed w-full min-h-screen h-full overflow-hidden">
        <header>
            <div className="navbar fixed z-50 bg-neutral">
                <div className="xl:hidden">
                    <label className="btn btn-square drawer-button" htmlFor="my-drawer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             className="inline-block w-5 h-5 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                </div>
                <a href="#hero" className="absolute left-1/2 -ml-10 xl:left-0 xl:ml-0">
                    <p className="font-roboto text-primary font-bold text-2xl text-center xl:w-auto xl:ml-10">Roem</p>
                    <p className="font-roboto text-accent font-bold text-2xl text-center xl:w-auto">bat</p>
                </a>
                <div className="hidden xl:inline-block w-full items-center">
                    <div className="w-full flex justify-center">
                        <a href="#savoirFaire" className="btn flex-none text-xl font-roboto mx-5 hover:text-primary">Savoir-faire</a>
                        <a href="#projets" className="btn flex-none text-xl font-roboto mx-5 hover:text-primary">Nos projets</a>
                        <a href="#histoire" className="btn flex-none text-xl font-roboto mx-5 hover:text-primary">Notre histoire</a>
                        <a href="#contact" className="btn flex-none text-xl font-roboto mx-5 hover:text-primary">Contactez-nous</a>
                    </div>
                </div>
            </div>

            <div className="drawer absolute w-72">
                <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-neutral text-base-content">
                        <li><a className="my-4">Bienvenue</a></li>
                        <li><a className="my-4">Qui sommes-nous</a></li>
                        <li><a className="my-4">Que fait-on</a></li>
                        <li><a className="my-4">Contactez-nous</a></li>

                    </ul>
                </div>
            </div>
        </header>
        <body className="w-full min-h-screen h-full">
            <section id="hero" className="w-full h-screen flex flex-row justify-center overflow-hidden">
                <div className="w-full mt-12 flex flex-1 flex-col justify-center">
                    <h1 className="w-full text-center text-7xl xl:text-9xl text-white font-roboto font-bold bg-black/60 pt-10">Roembat</h1>
                    <p className="w-full text-center text-3xl text-primary font-bold font-roboto bg-black/60">Votre entrepreneur de confiance</p>
                    <div className="w-full flex justify-center pt-20 pb-10 bg-black/60">
                        <button className="btn btn-primary w-72 h-16 shadow shadow-xl shadow-black/100 border hover:border border-2 hover:border-2 border-neutral hover:border-neutral w-2/5 text-xl font-roboto">
                            Construisons votre rêve
                        </button>
                    </div>
                </div>
            </section>
            <section id="savoirFaire" className="w-full h-full xl:min-h-screen bg-neutral flex flex-col justify-center items-center overflow-hidden pb-10">

                <h2 className="w-full text-center text-6xl font-roboto font-bold mt-10">Savoir-faire</h2>
                <div className="w-4/5 h-3/4 bg-white/5 border border-white/20 rounded-xl xl:grid grid-cols-2 mt-12">

                    <div className="w-full py-10 xl:h-full col-span-1 border border-white/20">
                        <div className="w-full xl:h-2/5 flex justify-center items-center mb-6 flex justify-evenly xl:justify-center items-center">
                            <div className="h-16 w-16 rounded-full bg-white flex justify-center items-center xl:mr-12">
                                <img src={grosoeuvre} alt="foundations" className="h-16 w-16"/>
                            </div>
                            <h2 className="text-center text-2xl font-roboto font-bold xl:mr-20">Gros oeuvre</h2>
                        </div>
                        <div className="w-full xl:h-3/5 flex flex-row justify-center items-center pb-6">
                            <p className="w-full text-center text-xl font-roboto mx-6">
                                Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
                                Phasellus convallis elit id ullam corper amet et pulvinar.
                            </p>
                        </div>
                    </div>

                    <div className="w-full py-10 xl:h-full col-span-1 border border-white/20">
                        <div className="w-full xl:h-2/5 flex justify-center items-center mb-6 flex justify-evenly xl:justify-center items-center">
                            <div className="h-16 w-16 rounded-full bg-white flex justify-center items-center xl:mr-12">
                                <img src={foundations} alt="foundations" className="h-16 w-16"/>
                            </div>
                            <h2 className="text-center text-2xl font-roboto font-bold xl:mr-20">Fondations</h2>
                        </div>
                        <div className="w-full xl:h-3/5 flex flex-row justify-center items-center pb-6">
                            <p className="w-full text-center text-xl font-roboto mx-6">
                                Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
                                Phasellus convallis elit id ullam corper amet et pulvinar.
                            </p>
                        </div>
                    </div>
                    <div className="w-full py-10 xl:h-full col-span-1 border border-white/20">
                        <div className="w-full xl:h-2/5 flex justify-center items-center mb-6 flex justify-evenly xl:justify-center items-center">
                            <div className="h-16 w-16 rounded-full bg-white flex justify-center items-center xl:mr-12">
                                <img src={maconnerie} alt="foundations" className="h-16 w-16"/>
                            </div>
                            <h2 className="text-center text-2xl font-roboto font-bold xl:mr-20">Maçonnerie</h2>
                        </div>
                        <div className="w-full xl:h-3/5 flex flex-row justify-center items-center pb-6">
                            <p className="w-full text-center text-xl font-roboto mx-6">
                                Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
                                Phasellus convallis elit id ullam corper amet et pulvinar.
                            </p>
                        </div>
                    </div>
                    <div className="w-full py-10 xl:h-full col-span-1 border border-white/20">
                        <div className="w-full xl:h-2/5 flex justify-center items-center mb-6 flex justify-evenly xl:justify-center items-center">
                            <div className="h-16 w-16 rounded-full bg-white flex justify-center items-center xl:mr-12">
                                <img src={accompagnement} alt="foundations" className="h-16 w-16"/>
                            </div>
                            <h2 className="text-center text-2xl font-roboto font-bold xl:mr-20">Accompagnement</h2>
                        </div>
                        <div className="w-full xl:h-3/5 flex flex-row justify-center items-center pb-6">
                            <p className="w-full text-center text-xl font-roboto mx-6">
                                Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
                                Phasellus convallis elit id ullam corper amet et pulvinar.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </body>
    </div>
  );
}

export default App;

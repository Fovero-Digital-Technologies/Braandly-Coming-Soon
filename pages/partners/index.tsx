
import {useState, useEffect} from 'react';
import { connect, useDispatch } from 'react-redux';
import DefaultLayout from '../../components/Layouts/DefaultLayout';
import TextField from '@material-ui/core/TextField';


function Partners() {

  return (
    <>
      <DefaultLayout title="Become a Partner" desc="Partner with Braandly and gain amazing benefits">
          <div className="w-full dark:bg-dark dark:bg-text-white">
            <div className="container mx-auto  py-20 px-5 lg:px-0">
                    <div className="grid grid-cols-1 lg:grid-cols-7 pt-5">

                        <div className="flex flex-col justify-center col-span-3">
                            <h1 className="text-5xl md:text-6xl font-bold mb-5 dark:text-white leading-loose"><span className="text-primary dark:text-warning">Join, Partner and Gain Limitless Opportunities</span> With Braandly</h1>

                            <p className="text-xl leading-loose mb-5">Braandly is currently searching for interested partners like you to invest in our software as we make global impact in the branding and marketing industry.</p>

                            <a href="#partners_form" className="btn-primary  block dark:btn-warning text-2xl rounded text-white rounded px-6 py-3 font-medium w-full md:w-1/2 text-center">Get Started</a>
                        </div>
                        <div className="hidden lg:block lg:col-span-4">
                            <img src="/svg/collaborators.svg" />
                        </div>
                    </div>
            </div>

            <hr className="border-light-border dark:border-dark-border" />

            <div className="py-20 px-5 lg:px-0">
                <div className="text-center mx-auto" style={{maxWidth: "700px"}}>
                    <h2 className="text-4xl font-bold mb-5 dark:text-white leading-tight ">Giving You Top-Notch Benefits</h2>
                    <p className="text-lg leading-tight mb-5">Velit cupidatat ea ad ullamco officia ipsum ex incididunt cillum esse pariatur cupidatat. Pariatur mollit nulla voluptate duis et commodo excepteur cillum quis dolore excepteur ullamco consequat.</p>
                </div>
                
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 py-20 gap-8 items-center">
                        <img src="/svg/solution.svg" />
                        <div>
                            <h3 className="text-4xl font-bold mb-5 dark:text-white leading-tight">Elit enim tempor incididunt incididunt proidente.</h3>
                            <p className="text-lg leading-tight mb-5">Lorem ea cupidatat ea veniam culpa duis aliqua enim dolor in sint occaecat occaecat consequat. Ex culpa nulla nostrud mollit sint eu esse qui est. Magna pariatur sunt culpa sit ex quis exercitation.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 py-20 gap-8 items-center">
                        <div>
                            <h3 className="text-4xl font-bold mb-5 dark:text-white leading-tight">Elit enim tempor incididunt incididunt proidente.</h3>
                            <p className="text-lg leading-tight mb-5">Lorem ea cupidatat ea veniam culpa duis aliqua enim dolor in sint occaecat occaecat consequat. Ex culpa nulla nostrud mollit sint eu esse qui est. Magna pariatur sunt culpa sit ex quis exercitation.</p>
                        </div>
                        <img src="/svg/solution.svg" />
                        
                    </div>
                </div>

            </div>

            <div className="bg-primary py-10 px-5 mb-52" id="partners_form">
                <div className="container mx-auto text-center" style={{maxWidth:"700px"}}>
                    <h3 className="text-5xl font-bold mb-5 text-white">Elit enim tempor incididunt incididunt proidente.</h3>
                    <p className="text-white text-lg leading-tight mb-10">Lorem ea cupidatat ea veniam culpa duis aliqua enim dolor in sint occaecat occaecat consequat.</p>
                </div>

                <div className="rounded bg-white dark:bg-dark-background px-8 py-10 mx-auto -mb-32 shadow-xl max-w-[500px]">
                    <form>
                    <div className="block mb-6">
                        <TextField id="standard-basic" label="Your Name" variant="standard" className="block w-full dark:text-light"  />
                    </div>
                    <div className="block mb-6">
                        <TextField id="standard-basic" label="Email Address" variant="standard" type="email" className="block w-full"  />
                    </div>
                    <div className="block mb-6">
                        <TextField
                            id="standard-multiline-static"
                            label="Message"
                            multiline
                            rows={4}
                            variant="standard"
                            className="w-full"
                            />
                    </div>
                    <div className="flex">
                        <input type="submit" value="Join Partners" className="w-full bg-primary text-white text-lg dark:bg-warning px-4 py-2 rounded cursor-pointer" />
                    </div>

                    </form>
                </div>
                 
            </div>
          </div>
 
      </DefaultLayout>
    </>
  )
}


export default Partners;

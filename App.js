import './App.css';
import {useState} from 'react';
function App() {
  return (
    <div className="App">
      <div id='header'>
        <div className='container'>
          <nav>
            <h1><span>I</span>nfo<span>R</span>epos</h1>
            <ul>
              <li><a href='#header'>Home</a></li>
              <li><a href='#features'>Features</a></li>
              <li><a href='#Gallery'>Gallery</a></li>
              <li><a href='#working'>Working</a></li>
              <li><a href='#Contact-us'>Contact</a></li>
            </ul>
          </nav>
          <div className='home'>
            <div className='row'>
            <div className='col-1'>
            <p>Advanced Disease Detection</p>
            <h1>Drone</h1>
            </div>
            <div className='col-2'>
              <img src='./images/drone-1.jpg'></img>
            </div>
            </div>

          </div>
        </div>
      </div>
      
      <div id='features'>
        <div className='container'>
        <nav>
            <h1><span>I</span>nfo<span>R</span>epos</h1>
            <ul>
              <li><a href='#header'>Home</a></li>
              <li><a href='#features'>Features</a></li>
              <li><a href='#Gallery'>Gallery</a></li>
              <li><a href='#working'>Working</a></li>
              <li><a href='#Contact-us'>Contact</a></li>
            </ul>
          </nav>
          <div className='features-row'>
            <div className='col-1'>
                <img src='./images/drone-2.png'></img>
            </div>
            <div className='col-2'> 
              <ol>
                <h2>Features </h2>
                <li><span>Multi-Sensor Technology :</span> Our drone is equipped with multiple advanced sensors that collect comprehensive data about the fields, including temperature, humidity, and spectral analysis.</li>
                <li><span>High-Definition Camera :</span> With a high-definition camera onboard, our drone captures detailed imagery of the fields, allowing for precise analysis and disease detection.</li>
                <li><span>AI and ML Models :</span> Powered by artificial intelligence and machine learning algorithms, our drone analyzes collected data to detect signs of diseases accurately and efficiently.</li>
                <li><span>Disease Prevention :</span> By identifying diseases early on, our drone enables proactive measures to prevent their spread, minimizing crop damage and maximizing yield.</li>
                <li><span>GPS Integration :</span> Integrated GPS technology ensures accurate mapping and pinpointing of the exact coordinates of areas affected by diseases, enabling swift action.</li>
              </ol>
              <ol>
                <h2>Benifits </h2>
                <li><span>Improved Crop Health :</span> Our drone helps farmers maintain optimal crop health by detecting diseases at their earliest stages, allowing for timely intervention.</li>
                <li><span>Increased Yield :</span> By preventing the spread of diseases, our solution helps maximize crop yield, ensuring a more profitable harvest.</li>
                <li><span>Cost-Efficiency :</span> Early detection and prevention of diseases reduce the need for expensive chemical treatments, saving farmers both time and money.</li>
                <li><span>Environmental Sustainability :</span> By minimizing the use of pesticides and chemicals, our solution promotes environmentally friendly farming practices.</li>
                
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div id='Gallery'>
        <div className='container'>
        <nav>
            <h1><span>I</span>nfo<span>R</span>epos</h1>
            <ul>
              <li><a href='#header'>Home</a></li>
              <li><a href='#features'>Features</a></li>
              <li><a href='#Gallery'>Gallery</a></li>
              <li><a href='#working'>Working</a></li>
              <li><a href='#Contact-us'>Contact</a></li>
            </ul>
          </nav>
          
          <div className='gallery-row'>
          <h3 className='drone'>GALLERY OF THE DRONES</h3>
          <div className='row-1'>
            <div className='col-1'>
            <img src='./images/drone-1.jpg'></img>
            </div>
            <div className='col-2'>
            <img src='./images/drone-2.png'></img>  
            </div>
            <div className='col-3'>
            <img src='./images/Field_drone.png'></img>  
            </div>
            
          </div>
          </div>
        </div>
      </div>

      <div id='working'>
        <div className='container'>
        <nav>
            <h1><span>I</span>nfo<span>R</span>epos</h1>
            <ul>
              <li><a href='#header'>Home</a></li>
              <li><a href='#features'>Features</a></li>
              <li><a href='#Gallery'>Gallery</a></li>
              <li><a href='#working'>Working</a></li>
              <li><a href='#Contact-us'>Contact</a></li>
            </ul>
        </nav>
        <div className='Working'>
        <h1>Working Of The Drone</h1><br></br>
        <ol>
          <li>Field Scanning: The drone autonomously scans the fields, collecting data from various sensors and capturing high-definition imagery.</li><br></br>
          <li>Data Analysis: Collected data is analyzed in real-time using our advanced AI and ML models to detect any signs of diseases or abnormalities.</li><br></br>
          <li>Alert System: Upon detecting a potential disease outbreak, the drone immediately alerts farmers, providing them with actionable insights to mitigate the issue.</li><br></br>
          <li>Preventive Measures: With precise GPS coordinates provided, farmers can take targeted preventive measures, such as localized treatment or crop rotation, to contain the disease effectively.</li><br></br>
        </ol>
        
        </div>
        <div className='why-choose-us'>
          <h1>Why to Choose Us</h1><br></br>
          <ul>
            <li>Expertise: Backed by a team of experts in agriculture, robotics, and artificial intelligence, we deliver innovative solutions tailored to meet the unique needs of modern farmers.</li><br></br>
            <li>Reliability: Our drone is built to withstand harsh environmental conditions, ensuring reliable performance in any agricultural setting</li><br></br>
            <li>Continuous Support: We provide ongoing support and updates to our customers, ensuring they always have access to the latest advancements in disease detection technology.</li><br></br>
          </ul>
          <br></br>
          <img src='./images/drone-1.jpg'></img>
          <p>Transform Your Farming Practices With Our Disease Detection Drone.</p>
          <p>Contact Us Today to Learn More!</p>
        </div>
        </div>
      </div>

      <div id='Contact-us'>
        <div className='container'>
        <nav>
            <h1><span>I</span>nfo<span>R</span>epos</h1>
            <ul>
              <li><a href='#header'>Home</a></li>
              <li><a href='#features'>Features</a></li>
              <li><a href='#Gallery'>Gallery</a></li>
              <li><a href='#working'>Working</a></li>
              <li><a href='#Contact-us'>Contact</a></li>
            </ul>
        </nav>
          <div className='row'>
            <div className='col-1'>
              <div>
                <p>LET'S TALK</p>
                <h1>SPEAK WITH</h1>
                <h1>Expert</h1>
                <h1>Engineers.</h1><br></br>
                <div className='images'>
                <img src='./images/Home.png'></img>
                <p>Email :</p><br></br>
                <p>info@inforepos.in</p>
                </div>
                <div className='images'>
                <img src='./images/Phone-1.png'></img>
                <p>Phone :</p>
                <p>+91 4040272038</p>
                </div>
                <div className='images'>
                <img src='./images/Location.png'></img>
                <p>Location :</p>
                <p>Hyderabad, India</p>
                </div>
              </div>
            </div>
            <div className='col-2'>
              <h3>GET IN TOUCH </h3><br></br>
              <h1>Fill The Form Below</h1><br></br>
              <div className='col-2-1'>
              <input type='text' id='name' placeholder='Name' ></input>
              <input type='mail' id='mail' placeholder='E-mail' ></input>
              </div>
              <div className='col-2-2'>
              <input type='tel' placeholder='Phone Number' ></input>
              <input type='text' placeholder='Your Website' ></input>
              </div>
              <div className='col-2-3'>
              <input type='text' placeholder='Your Message here'></input>
              </div>
              <div className='col-2-4'>
              <button type='submit'>Submit Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;

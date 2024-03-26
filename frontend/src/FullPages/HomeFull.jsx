import React from "react";
import HomePage from "../components/HomePage";
import "./styl.css";
import { Link } from 'react-router-dom'

const HomeFull = () => {
  return (
    <>
      <div className="main">
        <div className="page1">
          <div className="nav">
            <input type="checkbox" id="nav-check" />
            <div className="nav-header">
              <div className="nav-title">TraqFit</div>
            </div>
            <div className="nav-btn">
              <label for="nav-check">
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>

            <div className="nav-links">
              <a href="#" className="hover-underline-animation">
                Home
              </a>
              <a href="#page3" className="hover-underline-animation">
                Workouts
              </a>
              <a href="#page5" className="hover-underline-animation">
                Blogs
              </a>
              <a href="#page7" className="hover-underline-animation">
                Try Services
              </a>
            
              <Link className="login" to={'/sign-in'}>Login</Link>
              
              <Link className="signUp" to={'/sign-up'}>Signup</Link>
            </div>
          </div>
          <div className="content">
            <h1>Healthy Life starts with</h1>
            <br />
            <h3>Healthy Eating</h3>
            <br />
            <p>Start your healthy journey with us .</p>
            <p>Track Your Meals, learn new Workouts, </p>
            <p>and reach your goals with TraqFit</p>
          </div>
        </div>
        <div className="page2">
          <h1>
            Your <span>nutritional</span> Assistant
          </h1>
          <div>
            <img src="../src/assets/phone.png" alt="" />
          </div>
        </div>
        <div className="page3" id="page3">
          <div className="text">
            <h1>
              Tools for your <span>Goals</span>
            </h1>
            <p>
              Trying to loose weight, tone up, lower your BMI, or invest in
              <br /> your overall health?We give you the right features to get
              there.
            </p>
          </div>
          <div className="cards">
            <div className="card">
              <img src="../src/assets/Meal.png" alt="" />
              <p>
                Plan your meals, get nutritionist approved recipes and scan
                barcodes, to get calorie insights of your food.
              </p>
            </div>
            <div className="card">
              <img src="../src/assets/Apple.png" alt="" />
              <p>
                Monitor your daily progress, get insights of your daily habits
                to keep you on track
              </p>
            </div>
            <div className="card">
              <img src="../src/assets/Workouts.png" alt="" />
              <p>
                Get Extensive Diet and Workout Plans customised just for you and
                your fitness goals{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="page4">
          <div className="text">
            <h1>Success Stories</h1>
            <p>
              Everyday more than 2000 members reach their goals with TraqFit.
            </p>
            <p>Get inspiredfor the journey ahead.</p>
          </div>
          <div className="usercards">
            <div className="usercard">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8"
                alt=""
              />
              <h4>John Wick</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam incidunt officiis natus ullam quibusdam culpa tenetur
                harum nisi autem magni, unde modi fuga fugit ipsam.
              </p>
            </div>
            <div className="usercard">
              <img
                src="https://images.unsplash.com/photo-1607506548187-b341815f85ef?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTV8NzYwODI3NzR8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <h4>Katie Gerrard</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam incidunt officiis natus ullam quibusdam culpa tenetur
                harum nisi autem magni, unde modi fuga fugit ipsam.
              </p>
            </div>
            <div className="usercard">
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mzl8NzYwODI3NzR8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <h4>Nicholas Horn</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam incidunt officiis natus ullam quibusdam culpa tenetur
                harum nisi autem magni, unde modi fuga fugit ipsam.
              </p>
            </div>
          </div>
        </div>
        <div className="page5" id="page5">
          <div className="text">
            <h1>
              Latest Stories from our <span>Blogs</span>
            </h1>
            <p>
              Get nutritionist-approved recipes and motivational workout tips{" "}
              <br /> from TraqFit
            </p>
          </div>
          <div className="blogs">
            <div className="blog">
              <img
                src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/12/Hub_thumb_healthyeating_732x549-1.jpg?w=1155&h=1152"
                alt=""
              />
              <p>
                <a
                  target="_blank"
                  href="https://blog.myfitnesspal.com/10-make-ahead-breakfasts-under-300-calories/"
                >
                  15 Make-Ahead Breakfasts Under 300 Calories
                </a>
              </p>
            </div>
            <div className="blog">
              <img
                src="https://images.squarespace-cdn.com/content/v1/55b7f4ffe4b0a286c4c3499e/5e094161-f121-40bf-a2e9-360a26c34826/compound-exercises-with-dumbbells"
                alt=""
              />
              <p>
                <a
                  target="_blank"
                  href="https://blog.myfitnesspal.com/essential-guide-to-movement-activity/"
                >
                  Vital Steps for Starting Your Physical Activity Journey
                </a>
              </p>
            </div>
            <div className="blog">
              <img
                src="https://images.everydayhealth.com/images/us-news-world-report-reveals-best-and-worst-diets-of-2022-1440x810.jpg"
                alt=""
              />
              <p>
                <a
                  target="_blank"
                  href="https://blog.myfitnesspal.com/10-make-ahead-breakfasts-under-300-calories/"
                >
                  Can you learn to crave healthy foods? Experts say, "Yes!"
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="page6">
          <div className="text">
            <h1>
              Start Your <span>Healthy Journey</span>
            </h1>
            <p>
              More than 2000 members have reached their goals and <br /> leaving
              a healthy life
            </p>
          </div>
          <div className="cardsp6">
            <div className="cardp6">
              {/* <i className="fa-regular fa-user fa-2xl icon" style="color: #ff0000;"></i> */}
              <h1>30</h1>
              <h2>Million Users</h2>
            </div>
            <div className="cardp6">
              {/* <i className="fa-solid fa-weight-scale fa-2xl icon" style="color: #ff0000;"></i> */}
              <h1>10</h1>
              <h2>Lakhs Weight Lost</h2>
            </div>
            <div className="cardp6">
              {/* <i className="fa-regular fa-star fa-2xl icon" style="color: #ff0000;"></i> */}
              <h1>4.5</h1>
              <h2>Star Rating</h2>
            </div>
          </div>
        </div>
        <div className="page7" id="page7">
          <div className="text">
            <h1>
              Try Our <span>Services</span>
            </h1>
            <p>
              For <span>Free !</span>
            </p>
          </div>
          <div className="services">
            <div className="service card">
              <img src="../src/assets/BMI cover.jpg" alt="" />
              <a href="#">Calculate Your BMI</a>
            </div>
            <div className="service card">
              <img src="../src/assets/Diet Cover.jpg" alt="" />
              <a href="#">Plan Your Diet</a>
            </div>
            <div className="service card">
              <img src="../src/assets/calorie cover.webp" alt="" />
              <a href="#">Calorie Tracking</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFull;

import React from "react";
import FeatureItem from "../main-features-items/index.js";
import Hero from "../main-hero/index.js";


function Main() {
    return (
        <div>
        <main>
        <Hero />
      <section className="features">
          <h2 className="sr-only">Features</h2>
          
          <FeatureItem 
            iconSrc="./img/icon-chat.webp"
            altText="Chat Icon"
            title="You are our #1 priority"
            description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
          />

          <FeatureItem 
            iconSrc="./img/icon-money.webp"
            altText="Money Icon"
            title="More savings means higher rates"
            description="The more you save with us, the higher your interest rate will be!"
          />

          <FeatureItem 
            iconSrc="./img/icon-security.webp"
            altText="Security Icon"
            title="Security you can trust"
            description="We use top of the line encryption to make sure your data and money is always safe."
          />
          
        </section>
    </main> 
    </div>
)
}

export default Main;
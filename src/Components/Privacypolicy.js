import React, { useState, useRef, useEffect } from "react";
import FullbackgroundImage from "../Assets/rectangle.png";
import "./PrivacyPolicy.css"; // Import the CSS file for styling the Privacy Policy page
import { Navbar } from "./Navbar";
import CodingXLogo from "../Assets/coding-x-logo.svg";
import { Link } from "react-router-dom";

export const PrivacyPolicy = () => {
  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);
  const thirdSectionRef = useRef(null);
  const fourthSectionRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className="privacy-policy-container"
      style={{ backgroundImage: `url(${FullbackgroundImage})` }}
    >
      <div class="navbar-for-privacypolicy">
        <div className="navbar">
          <div className="logo">
            <Link to="/">
              <img src={CodingXLogo} alt="Logo" className="Coding-X_Logo_pp" />
            </Link>
          </div>
          <div className="nav-links-pp">
            <Link to="/" className="Home">
              Home {">"} Privacy Policy
            </Link>
          </div>
        </div>
      </div>
      <div class="main-privacy-content">
        <div className="content-container">
          <div className="sidebar">
            <h1 className="privacy-policy-heading">Privacy Policy</h1>
          </div>

          <div className="main-content">
            <section className="who-we-are">
              <h2 className="privacy-policy-subheading">Who we are</h2>
              <p className="privacy-policy-text">
                Our website address is: https://codingx.app<br></br>
                <br></br>
                Our mobile application Products include:<br></br>
                <br></br>
                1. Hacker X: Learn Ethical Hacking & Cybersecurity<br></br>
                <br></br>
                2. Python X: Learn python programming<br></br>
                <br></br>
                3. Java X: Learn java programming
              </p>
            </section>

            <section className="privacy-policy-section">
              <h2 className="privacy-policy-subheading">Introduction</h2>
              <h3 className="privacy-goals">Our Privacy Goals</h3>
              <p className="privacy-policy-text-part1">
                At CodingX.app, we want to give you the best possible experience
                to ensure that you enjoy our service today, tomorrow, and in the
                future. To do this we need to understand your learning habits so
                we can deliver an exceptional and personalized learning
                experience specifically for you. That said, your privacy and the
                security of your personal data is, and will always be,
                enormously important to us. So, we want to transparently explain
                how and why we gather, store, share and use your personal data –
                as well as outline the controls and choices you have around when
                and how you choose to share your personal data. That is our
                objective, and this Privacy Policy (“Policy”) will explain
                exactly what we mean in further detail below. This privacy
                policy has been compiled to better serve those who are concerned
                with how their ‘Personally identifiable information (PII) is
                being used online. PII, as used in US privacy law and
                information security, is information that can be used on its own
                or with other information to identify, contact, or locate a
                single person, or to identify an individual in context. Please
                read our privacy policy carefully to get a clear understanding
                of how we collect, use, protect, or otherwise handle your
                Personally Identifiable Information in accordance with our
                website/app.
              </p>
              <h3 className="privacy-goals">How we collect your Information</h3>
              <p className="privacy-policy-text-part1">
                When ordering or registering on our site, as appropriate, you
                may be asked to enter your email address or other details to
                help you with your experience.
              </p>
              <h3 className="privacy-goals">How do we use your information?</h3>
              <p className="privacy-policy-text-part1">
                We may use the information we collect from you when you
                register, make a purchase, sign up for our newsletter, respond
                to a survey or marketing communication, surf the website, or use
                certain other site features in the following ways:
                <br></br> <br></br>
                1. To personalize the user’s experience and to allow us to
                deliver the type of content and product offerings in which you
                are most interested.
                <br></br> <br></br>
                2. To allow us to better service you in responding to your
                customer service requests.
              </p>
              <h3 className="privacy-goals">How do we use your information?</h3>
              <p className="privacy-policy-text-part1">
                We may use the information we collect from you when you
                register, make a purchase, sign up for our newsletter, respond
                to a survey or marketing communication, surf the website, or use
                certain other site features in the following ways:
                <br></br> <br></br>
                1. To personalize the user’s experience and to allow us to
                deliver the type of content and product offerings in which you
                are most interested.
                <br></br> <br></br>
                2. To allow us to better service you in responding to your
                customer service requests.
              </p>
            </section>

            <section className="coding-policy-for-codingX">
              <h2 className="privacy-policy-subheading">
                Cookie Policy for CodingX.app
              </h2>
              <h3 className="privacy-goals">
                <bold>What Are Cookies</bold>
              </h3>
              <p className="privacy-policy-text-part1">
                As is common practice with almost all professional websites this
                site uses cookies, which are tiny files that are downloaded to
                your computer, to improve your experience. This page describes
                what information they gather, how we use it and why we sometimes
                need to store these cookies. We will also share how you can
                prevent these cookies from being stored however this may
                downgrade or ‘break’ certain elements of the sites
                functionality. For more general information on cookies see the
                Wikipedia article on HTTP Cookies
              </p>
              <h3 className="privacy-goals">How We Use Cookies</h3>
              <p className="privacy-policy-text-part1">
                We use cookies for a variety of reasons detailed below.
                Unfortunately is most cases there are no industry standard
                options for disabling cookies without completely disabling the
                functionality and features they add to this site. It is
                recommended that you leave on all cookies if you are not sure
                whether you need them or not in case they are used to provide a
                service that you use.
              </p>
              <h3 className="privacy-goals">Disabling Cookies</h3>
              <p className="privacy-policy-text-part1">
                You can prevent the setting of cookies by adjusting the settings
                on your browser (see your browser Help for how to do this). Be
                aware that disabling cookies will affect the functionality of
                this and many other websites that you visit. Disabling cookies
                will usually result in also disabling certain functionality and
                features of the this site. Therefore it is recommended that you
                do not disable cookies.
              </p>
              <h3 className="privacy-goals">The Cookies We Set</h3>
              <p className="privacy-policy-text-part1">
                If you create an account with us then we will use cookies for
                the management of the signup process and general administration.
                These cookies will usually be deleted when you log out however
                in some cases they may remain afterwards to remember your site
                preferences when logged out. We use cookies when you are logged
                in so that we can remember this fact. This prevents you from
                having to log in every single time you visit a new page. These
                cookies are typically removed or cleared when you log out to
                ensure that you can only access restricted features and areas
                when logged in.{" "}
              </p>
              <h3 className="privacy-goals">Third Party Cookies</h3>
              <p className="privacy-policy-text-part1">
                In some special cases we also use cookies provided by trusted
                third parties. The following section details which third party
                cookies you might encounter through this site. This site uses
                Google Analytics which is one of the most widespread and trusted
                analytics solution on the web for helping us to understand how
                you use the site and ways that we can improve your experience.
                These cookies may track things such as how long you spend on the
                site and the pages that you visit so we can continue to produce
                engaging content. For more information on Google Analytics
                cookies, see the official Google Analytics page. The Google
                AdSense service we use to serve advertising uses a DoubleClick
                cookie to serve more relevant ads across the web and limit the
                number of times that a given ad is shown to you. For more
                information on Google AdSense see the official Google AdSense
                privacy FAQ. We also use social media buttons and/or plugins on
                this site that allow you to connect with your social network in
                various ways. For these to work the following social media sites
                including; Facebook, Twitter, Google+, will set cookies through
                our site which may be used to enhance your profile on their site
                or contribute to the data they hold for various purposes
                outlined in their respective privacy policies.
              </p>

              <h3 className="privacy-goals">More Information</h3>
              <p className="privacy-policy-text-part1">
                Hopefully, that has clarified things for you and as was
                previously mentioned if there is something that you aren’t sure
                whether you need or not it’s usually safer to leave cookies
                enabled in case it does interact with one of the features you
                use on our site. However, if you are still looking for more
                information then you can contact us through one of our preferred
                contact methods.{" "}
              </p>

              <h3 className="privacy-goals">Email</h3>
              <p className="privacy-policy-text-part1">hello@codingx.app</p>

              <h3 className="privacy-goals">Third-party disclosure</h3>
              <p className="privacy-policy-text-part1">
                This privacy policy has been compiled to better serve those who
                are concerned with how their ‘Personally identifiable
                information (PII) is being used online. PII, as used in US
                privacy law and information security, is information that can be
                used on its own or with other information to identify, contact,
                or locate a single person, or to identify an individual in
                context. Please read our privacy policy carefully to get a clear
                understanding of how we collect, use, protect or otherwise
                handle your Personally Identifiable Information in accordance
                with our website/app.
              </p>
              <h3 className="privacy-goals">Third-party links</h3>
              <p className="privacy-policy-text-part1">
                We do not include or offer third-party products or services on
                our website.
              </p>
            </section>
            <section className="data-retention">
              <h2 className="privacy-policy-subheading">
                Data Retention & Deletion Policy
              </h2>
              <h3 className="privacy-goals">
                <bold>Retention</bold>
              </h3>
              <p className="privacy-policy-text-part1">
                We keep your personal data only as long as necessary to provide
                you with the Spotify Service and for Spotify’s legitimate and
                essential business purposes, such as:
                <br></br> <br></br>– maintaining the performance of our
                platform/service
                <br></br>
                <br></br>– making data-driven business decisions about new
                features and offerings
                <br></br>
                <br></br>– complying with our legal obligations
                <br></br>
                <br></br>– resolving disputes
              </p>
              <h3 className="privacy-goals">Deletion</h3>
              <p className="privacy-policy-text-part1">
                If you close or request that we close your account, we’ll delete
                or anonymise your personal data so it no longer identifies you,
                unless we’re required to keep something or we still need to use
                it for a legally justifiable reason. User can request to delete
                their data by requesting data deletion through their registered
                email ID. Simply write to our CRM team at{" "}
                <bold>hello@codingx.app</bold> with data deletion request.
                <br></br>Here are some examples of situations where we’re
                legally allowed or required to keep some of your personal data:
                <br></br>
                <br></br>– if there’s an unresolved issue relating to your
                account, such as an outstanding credit or unresolved claim or
                dispute.
                <br></br> <br></br>– for our legitimate business interests such
                as fraud prevention or to maintain security.
              </p>
              <h3 className="privacy-goals">Google</h3>
              <p className="privacy-policy-text-part1">
                Google’s advertising requirements can be summed up by Google’s
                Advertising Principles. They are put in place to provide a
                positive experience for users.
                https://support.google.com/adwordspolicy/answer/1316548?hl=en We
                use Google AdSense Advertising on our website. Google, as a
                third-party vendor, uses cookies to serve ads on our site.
                Google’s use of the DART cookie enables it to serve ads to our
                users based on previous visits to our site and other sites on
                the Internet. Users may opt-out of the use of the DART cookie by
                visiting the Google Ad and Content Network privacy policy. We
                have implemented the following:
                <br></br> <br></br>
                1. Remarketing with Google AdSense <br></br>
                2. Demographics and Interests Reporting
                <br></br>
                <br></br>
                We along with third-party vendors, such as Google use
                first-party cookies (such as the Google Analytics cookies) and
                third-party cookies (such as the DoubleClick cookie) or other
                third-party identifiers together to compile data regarding user
                interactions with ad impressions and other ad service functions
                as they relate to our website.
              </p>
              <h3 className="privacy-goals">Opting out:</h3>
              <p className="privacy-policy-text-part1">
                Users can set preferences for how Google advertises to you using
                the Google Ad Settings page. Alternatively, you can opt out by
                visiting the Network Advertising initiative opt out page or
                permanently using the Google Analytics Opt Out Browser add on.
              </p>
              <h2 className="act-compliance">Act compliance</h2>
              <p className="privacy-policy-text-part1">
                According to CalOPPA we agree to the following: Users can visit
                our site anonymously. Once this privacy policy is created, we
                will add a link to it on our home page or as a minimum on the
                first significant page after entering our website. Our Privacy
                Policy link includes the word ‘Privacy’ and can be easily be
                found on the page specified above. Users will be notified of any
                privacy policy changes:<br></br>
                <br></br>
                1. On our Privacy Policy Page<br></br>
                2. By logging in to their account
                <br></br>
              </p>

              <h3 className="privacy-goals">
                COPPA (Children Online Privacy Protection Act)
              </h3>
              <p className="privacy-policy-text-part1">
                We do not specifically market to children under 13.
              </p>

              <h3 className="privacy-goals">CAN SPAM Act</h3>
              <p className="privacy-policy-text-part1">
                1. NOT To be in accordance with CANSPAM we agree to the
                following:<br></br>
                use false or misleading subjects or email addresses. <br></br>
                2. Identify the message as an advertisement in some reasonable
                way.<br></br>
                3. Include the physical address of our business or site
                headquarters.<br></br>
                4. Monitor third-party email marketing services for compliance,
                if one is used. <br></br>
                5. Honor opt-out/unsubscribe requests quickly. <br></br>
                Allow users to unsubscribe by using the link at the bottom of
                each email. If at any time you would like to unsubscribe from
                receiving future emails, you can email us at hello@codingx.app
                and we will promptly remove you from ALL correspondence.
              </p>

              <h2 className="notes">Note</h2>
              <p className="privacy-policy-text-part1">
                Applications belonging to CodingX.app collects user information
                primarily to enhance user experience and being able to provide
                better service to its users. The company may further use this
                information for product enhancement, support and promotions
                without being subjected to any litigations. If there are any
                questions regarding this privacy policy you may contact us using
                the below information. Email: hello@codingx.app
              </p>
            </section>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-content">
          <div className="lineone">
            <div>
              <Link to="/privacy-policy" className="Privacy-Policy">
                Privacy Policy
              </Link>{" "}
              /{" "}
              <Link to="/terms" className="Legal">
                Terms
              </Link>
            </div>
          </div>
          <div className="-Rightsol-Pvt-Ltd">© Rightsol Pvt. Ltd. 2022</div>
        </div>
      </footer>
    </div>
  );
};

import React, { useRef, useEffect } from "react";
import FullbackgroundImage from "../Assets/rectangle.png";
import "./Terms.css"; // Import the CSS file for styling the Privacy Policy page
import { Navbar } from "./Navbar";
import CodingXLogo from "../Assets/coding-x-logo.svg";
import { Link } from "react-router-dom";

export const Terms = () => {
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
          <div className="nav-links">
            <Link to="/" className="Home">
              Home {">"} Terms
            </Link>
          </div>
        </div>
      </div>
      <div class="main-privacy-content">
        <div className="content-container">
          <div className="sidebar">
            <h1 className="privacy-policy-heading">Terms</h1>
          </div>

          <div className="main-content">
            <section className="second-and-last-section">
              <h2 className="privacy-policy-subheading">Introduction</h2>
              <h3 className="privacy-goals">Welcome to CodingX.app!</h3>
              <p className="privacy-policy-text-part1">
                These terms and conditions outline the rules and regulations for
                the use of CodingX platform’s Website/Mobile apps.
                <br></br>
                <br></br>
                Our mobile application Products include:
                <br></br>
                <br></br>
                1. Hacker X: Learn Ethical Hacking & Cybersecurity
                <br></br>
                <br></br>
                2. Python X: Learn python programming
                <br></br>
                <br></br>
                3. Java X: Learn java programming
                <br></br>
                <br></br>
                CodingX is located at:
                <br></br>
                CodingX.app Rightsol private limited Tower 1, Seawoods Grand
                Central, Sector 40 Seawoods Railway Station 11th Floor Navi
                Mumbai, Maharashtra 400706
              </p>
              <h3>
                <bold>
                  {" "}
                  Note: Your trust while using our platform is most important to
                  us. We do our best to ensure your experience and data is safe
                  with us.
                </bold>
              </h3>

              <p className="privacy-policy-text-part1">
                By accessing this website we assume you accept these terms and
                conditions in full. Do not continue to use CodingX platform’s
                website/apps if you do not accept all of the terms and
                conditions stated on this page.
                <br></br>
                <br></br>
                The following terminology applies to these Terms and Conditions,
                Privacy Statement and Disclaimer Notice and any or all
                Agreements: “Client”, “You” and “Your” refers to you, the person
                accessing this website and accepting the Company’s terms and
                conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”,
                refers to our Company. “Party”, “Parties”, or “Us”, refers to
                both the Client and ourselves, or either the Client or
                ourselves. All terms refer to the offer, acceptance and
                consideration of payment necessary to undertake the process of
                our assistance to the Client in the most appropriate manner,
                whether by formal meetings of a fixed duration, or any other
                means, for the express purpose of meeting the Client’s needs in
                respect of provision of the Company’s stated services/products,
                in accordance with and subject to, prevailing law of India. Any
                use of the above terminology or other words in the singular,
                plural, capitalisation and/or he/she or they, are taken as
                interchangeable and therefore as referring to same.
                <br></br>
                <br></br>
                The “Terms and Conditions” agreement.This is optional but
                recommended. Use this agreement to set the rules and guidelines
                for users when they register an account with you. You could add
                the Return and Refund Policy in your Terms and Conditions rather
                than having a separate agreement on returns.
              </p>
              <h3 className="privacy-goals">Payments & cancellations</h3>
              <h3>A{")"} Billing</h3>
              <p className="privacy-policy-text-part1">
                You may purchase a Paid Subscription directly from our website
                or app or through a third party either by (1) paying a
                subscription fee in advance on a monthly basis or some other
                recurring interval disclosed to you prior to your purchase; or
                (2) pre-payment giving you access to the website/app
                content/service for a specific time period (“Pre-Paid Period”).
                <br></br> <br></br>
                We may change the price for the Paid Subscriptions, including
                recurring subscription fees, the Pre-Paid Period (for periods
                not yet paid), or Codes, from time to time and will communicate
                any price changes to you in advance and, if applicable, how to
                accept those changes. Price changes will take effect at the
                start of the next subscription period following the date of the
                price change. Subject to applicable law, you accept the new
                price by continuing to access our website/app service after the
                price change takes effect. If you do not agree with a price
                change, you have the right to reject the change by unsubscribing
                from the Paid Subscription prior to the price change going into
                effect.
              </p>
              <h3>B{")"} Renewal; Cancellation</h3>
              <p className="privacy-policy-text-part1">
                Unless your Paid Subscription has been purchased for a Pre-Paid
                Period, your payment to our website/apps or the third party
                through which you purchased the Paid Subscription will
                automatically renew at the end of the applicable subscription
                period, unless you cancel your Paid Subscription before the end
                of the then-current subscription period. If you purchased the
                Paid Subscription through our website/app, or if you purchased
                the Paid Subscription through a third party, by canceling the
                Paid Subscription through such third party. The cancellation
                will take effect the day after the last day of the current
                subscription period and you will be downgraded to the Free
                Service. If you purchased your Paid Subscription through our
                website/app and you cancel your payment or Paid Subscription
                and/or terminate any of the Agreements before the end of the
                current subscription period, we will not refund any subscription
                fees already paid to us. If you wish to receive a full refund of
                all monies paid to our website/app for genuine reasons, you must
                contact Customer Support at hello@codingx.app. The decision to
                grant a refund solely depends on us. When we process any refund,
                we will refund amounts using the method you used for payment.
                <br></br>
                <br></br>
                If you have purchased a Paid Subscription using a Code, your
                subscription will automatically terminate at the end of the
                period stated in the Code. If you have purchased your Paid
                Subscription through a third party, you must cancel directly
                with that third party.
              </p>
              <h3 className="privacy-goals">Cookies</h3>
              <p className="privacy-policy-text-part1">
                We employ the use of cookies. By using codingx.app’s
                website/apps you consent to the use of cookies in accordance
                with codingx.app’s privacy policy. Most of the modern day
                interactive websites use cookies to enable us to retrieve user
                details for each visit. Cookies are used in some areas of our
                site to enable the functionality of this area and ease of use
                for those people visiting. Some of our affiliate / advertising
                partners may also use cookies.
              </p>
              <h3 className="privacy-goals">License</h3>
              <p className="privacy-policy-text-part1">
                Unless otherwise stated, CodingX and/or it’s licensors own the
                intellectual property rights for all material on CodingX are
                reserved. You may view and/or print pages from our websites/apps
                for your own personal use subject to restrictions set in these
                terms and conditions. You must not: 1.Republish material from
                https://codingx.app, or any of our mobile applications.<br></br>
                2. Sell, rent or sub-license material from https://codingx.app
                or any of our mobile applications.<br></br>
                3. Reproduce, duplicate or copy material from
                https://codingx.app or any of our mobile applications.
                <br></br>
                <br></br>
                Redistribute content from CodingX.app (unless content is
                specifically made for redistribution).
              </p>
              <h3 className="privacy-goals">License</h3>
              <p className="privacy-policy-text-part1">
                1. Certain parts of this website/blog/apps/forum offer the
                opportunity for users to post and exchange opinions,
                information, material and data (‘Comments’) in areas of the
                website/blog/apps/forum. CodingX does not screen, edit, publish
                or review Comments prior to their appearance on the website and
                Comments do not reflect the views or opinions of CodingX, its
                agents or affiliates. Comments reflect the view and opinion of
                the person who posts such view or opinion. To the extent
                permitted by applicable laws CodingX shall not be responsible or
                liable for the Comments or for any loss cost, liability, damages
                or expenses caused and or suffered as a result of any use of
                and/or posting of and/or appearance of the Comments on this
                website.
                <br></br>
                2. CodingX reserves the right to monitor all Comments and to
                remove any Comments which it considers in its absolute
                discretion to be inappropriate, offensive or otherwise in breach
                of these Terms and Conditions.
                <br></br>
                3. You warrant and represent that:
                <ol>
                  <li>
                    {" "}
                    You are entitled to post the Comments on our
                    website/blog/apps/forum and have all necessary licenses and
                    consents to do so;
                  </li>
                  <li>
                    The Comments do not infringe any intellectual property
                    right, including without limitation copyright, patent or
                    trademark, or other proprietary right of any third party;
                  </li>
                  <li>
                    The Comments do not contain any defamatory, libelous,
                    offensive, indecent or otherwise unlawful material or
                    material which is an invasion of privacy.
                  </li>
                  <li>
                    The Comments will not be used to solicit or promote business
                    or custom or present commercial activities or unlawful
                    activity.
                  </li>
                </ol>
                4. You hereby grant to CodingX a non-exclusive royalty-free
                license to use, reproduce, edit and authorize others to use,
                reproduce and edit any of your Comments in any and all forms,
                formats or media.
              </p>

              <h3 className="privacy-goals">Hyperlinking to our Content</h3>
              <p className="privacy-policy-text-part1">
                1. The following organizations may link to our Web site without
                prior written approval:
                <ui>
                  <li>Government agencies;</li>
                  <li>Search engines;</li>
                  <li>News organizations;</li>
                  <li>
                    Online directory distributors when they list us in the
                    directory may link to our Web site in the same manner as
                    they hyperlink to the Web sites of other listed businesses;
                    and
                  </li>
                  <li>
                    Systemwide Accredited Businesses except soliciting
                    non-profit organizations, charity shopping malls, and
                    charity fundraising groups which may not hyperlink to our
                    Website.
                  </li>
                  <li>Review blogs;</li>
                  <li>Review forums;</li>
                </ui>
                2. These organizations may link to our home page, and/or our
                respective products homepage, to publications or to other Web
                site information so long as the link: (a) is not in any way
                misleading; (b) does not falsely imply sponsorship, endorsement
                or approval of the linking party and its products or services;
                and (c) fits within the context of the linking party’s site.
                <br></br>
                2. CodingX reserves the right to monitor all Comments and to
                remove any Comments which it considers in its absolute
                discretion to be inappropriate, offensive or otherwise in breach
                of these Terms and Conditions.
                <br></br>
                3. We may consider and approve in our sole discretion other link
                requests from the following types of organizations:
                <ui>
                  <li>
                    commonly-known consumer and/or business information sources
                    such as Chambers of Commerce, American Automobile
                    Association, AARP and Consumers Union;
                  </li>
                  <li>dot.com community sites;</li>
                  <li>
                    associations or other groups representing charities,
                    including charity giving sites,
                  </li>
                  <li>online directory distributors;</li>
                  <li>internet portals;</li>
                  <li>
                    accounting, law and consulting firms whose primary clients
                    are businesses; and
                  </li>
                  <li>educational institutions and trade associations.</li>
                </ui>
                We will approve link requests from these organizations if we
                determine that:
                <ui>
                  <br></br>{" "}
                  <li>
                    The link would not reflect unfavorably on us or our
                    accredited businesses (for example, trade associations or
                    other organizations representing inherently suspect types of
                    business, such as work-at-home opportunities, shall not be
                    allowed to link);{" "}
                  </li>
                  <li>
                    The organization does not have an unsatisfactory record with
                    us;{" "}
                  </li>
                  <li>
                    The benefit to us from the visibility associated with the
                    hyperlink outweighs the absence of CodingX and{" "}
                  </li>
                  <li>
                    {" "}
                    Where the link is in the context of general resource
                    information or is otherwise consistent with editorial
                    content in a newsletter or similar product furthering the
                    mission of the organization.
                  </li>
                </ui>
                <br></br>These organizations may link to our home page, to
                publications or to other Web site information so long as the
                link:
                <br></br> (a) is not in any way misleading;
                <br></br> (b) does not falsely imply sponsorship, endorsement or
                approval of the linking party and it products or services; and
                <br></br> (c) fits within the context of the linking party’s
                site. If you are among the organizations listed in paragraph 2
                above and are interested in linking to our website, you must
                notify us by sending an email to hello@codingx.app. Please
                include your name, your organization name, contact information
                (such as a phone number and/or e-mail address) as well as the
                URL of your site, a list of any URLs from which you intend to
                link to our Web site, and a list of the URL(s) on our site to
                which you would like to link. Allow 2-3 weeks for a response.
                Approved organizations may hyperlink to our Web site as follows:
                <br></br>
                1. By use of our corporate name; or<br></br>
                2. By use of the uniform resource locator (Web address) being
                linked to; or<br></br>
                3. By use of any other description of our Web site or material
                being linked to that makes sense within the context and format
                of content on the linking party’s site. No use of CodingX’s logo
                or other artwork will be allowed for linking absent a trademark
                license agreement.
              </p>
              <h3 className="privacy-goals">Iframes</h3>
              <p className="privacy-policy-text-part1">
                Without prior approval and express written permission, you may
                not create frames around our Web pages or use other techniques
                that alter in any way the visual presentation or appearance of
                our Web site.
              </p>
              <h3 className="privacy-goals">Content Liability</h3>
              <p className="privacy-policy-text-part1">
                We shall have no responsibility or liability for any content
                appearing on your Web site. You agree to indemnify and defend us
                against all claims arising out of or based upon your Website. No
                link(s) may appear on any page on your Web site or within any
                context containing content or materials that may be interpreted
                as libelous, obscene or criminal, or which infringes, otherwise
                violates, or advocates the infringement or other violation of,
                any third party rights.
              </p>
              <h3 className="privacy-goals">Reservation of Rights</h3>
              <p className="privacy-policy-text-part1">
                We reserve the right at any time and in its sole discretion to
                request that you remove all links or any particular link to our
                Web site. You agree to immediately remove all links to our Web
                site upon such request. We also reserve the right to amend these
                terms and conditions and its linking policy at any time. By
                continuing to link to our Web site, you agree to be bound to and
                abide by these linking terms and conditions.
              </p>
              <h3 className="privacy-goals">
                Removal of links from our website
              </h3>
              <p className="privacy-policy-text-part1">
                If you find any link on our Web site or any linked web site
                objectionable for any reason, you may contact us about this. We
                will consider requests to remove links but will have no
                obligation to do so or to respond directly to you. Whilst we
                endeavour to ensure that the information on this website is
                correct, we do not warrant its completeness or accuracy; nor do
                we commit to ensuring that the website remains available or that
                the material on the website is kept up to date.
              </p>
              <h3 className="privacy-goals">Disclaimer</h3>
              <p className="disclaimer-content">
                To the maximum extent permitted by applicable law, we exclude
                all representations, warranties and conditions relating to our
                website and the use of this website (including, without
                limitation, any warranties implied by law in respect of
                satisfactory quality, fitness for purpose and/or the use of
                reasonable care and skill). Nothing in this disclaimer will: 1.
                limit or exclude our or your liability for death or personal
                injury resulting from negligence; 2. limit or exclude our or
                your liability for fraud or fraudulent misrepresentation; 3.
                limit any of our or your liabilities in any way that is not
                permitted under applicable law; or 4. exclude any of our or your
                liabilities that may not be excluded under applicable law.
                <br></br>
                The limitations and exclusions of liability set out in this
                Section and elsewhere in this disclaimer: (a) are subject to the
                preceding paragraph; and (b) govern all liabilities arising
                under the disclaimer or in relation to the subject matter of
                this disclaimer, including liabilities arising in contract, in
                tort (including negligence) and for breach of statutory duty. To
                the extent that the website and the information and services on
                the website are provided free of charge, we will not be liable
                for any loss or damage of any nature.
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

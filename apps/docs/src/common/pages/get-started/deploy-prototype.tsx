import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../get-started';

export const title = 'Deploying your prototype';
const description = 'How to deploy your prototype';
const section = 'Get started';
const subsection = 'Prototyping';

const applyPrototype7 = require('../../../../assets/images/heroku2.png');
const applyPrototype8 = require('../../../../assets/images/heroku3.png');
const applyPrototype9 = require('../../../../assets/images/heroku4.png');


const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <Helmet>
      <title>{title} - Home Office Design System</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:article:section" content={section} />
    </Helmet>
    <div className="govuk-grid-column-one-quarter">
      {menu}
    </div>
    <div className="govuk-grid-column-three-quarters">
      <h1>
        <span className="caption">{subsection}</span>
        {title}
      </h1>
      <p>One of the ways you can deploy, or publish and share your prototype with others, is through Heroku.</p>

      <h2>Set up your remote repository</h2>
        <p>If you want to deploy your prototype so it can be tested with users or allow others to collaborate on it, you can set up a blank code repository in <A href="https://github.com/">GitHub</A>.</p>
      <h3>Optional: Commit and push your new prototype</h3>
        <p>Run the following commands to push up the first version of your new prototype to your remote code repository:</p>
      <pre><code>
      git remote add origin git@github.com:YOUR_USER/YOUR-PROTOTYPE.git<br />
      git push -u origin master
      </code></pre><br />

        <h2>Create an app on Heroku</h2>
        <ol style={{ maxWidth: '38em' }}>
          <li>Create a <A href="https://dashboard.heroku.com/">Heroku</A> account</li>
          <li>Click on <strong>New</strong> and select <strong>Create new app</strong></li>
          <li>A prototype deployed on Heroku is called an ‘app’. Type in an app name for your prototype and choose Europe as your region. Click <strong>Create app</strong></li>
        </ol>

        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full">
          <img  src={applyPrototype7} className="confirm-desktop" style={{maxHeight: "100%"}} alt="Heroku screen showing area for creating new app"/>
          </div>
        </div>
        <p></p>

        <h2>Deploy your prototype</h2>
        <p>Under deployment method, <strong>Heroku Git</strong> should be pre-selected. Follow the instructions on the page to <strong>Deploy using Heroku Git</strong></p>

        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full">
          <img  src={applyPrototype8} className="confirm-desktop" style={{maxHeight: "100%"}} alt="Heroku screen showing deployment method using Heroku Git"/>
          </div>
        </div>
        <p></p>

        <h2>Set a username and password</h2>
        <ol style={{ maxWidth: '38em' }}>
          <li>After you’ve completed the last step to deploy your application, click on the <strong>Settings</strong> tab on Heroku, click on <strong>Reveal config vars</strong> and enter your username and password.</li>
          <li>Once that is done, click on the <strong>Open app</strong> tab to view your prototype. It will have a url like <strong>your-prototype.herokuapp.com</strong></li>
        </ol>

        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full">
          <img  src={applyPrototype9} className="confirm-desktop" style={{maxHeight: "100%"}} alt="Heroku screen showing area for setting username and password"/>
          </div>
        </div>
    </div>
  </div>
);

export default Page;

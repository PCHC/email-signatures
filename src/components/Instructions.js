import React, {Component} from 'react';

import InsertImage2010 from '../images/instructions/insert-image_2010.jpg';
import InsertImage2016 from '../images/instructions/insert-image_2016.png';

export default class Instructions extends Component {
  render() {
    return (
      <div className="row mt-3">
        <div className="col">
          <h2>Instructions on editing your email signature in Outlook:</h2>
          <ol>
            <li className="mb-2">
              Open a new message. On the <strong>Message</strong> tab, click <strong>Signature</strong>, and then click <strong>Signatures...</strong>
            </li>
            <li className="mb-2">
              Under <strong>Select signature to edit</strong>, choose <strong>New</strong>, and in the <strong>New Signature</strong> dialog box, type a name for the signature.
            </li>
            { this.props.type === 'image'
            ?
              <li className="mb-2">In the <strong>Edit signature</strong> box, click the image icon (<img src={InsertImage2010} alt="Insert icon"/> or <img src={InsertImage2016} alt="Insert icon"/>). Browse to the image file you downloaded above (probably in your <strong>Downloads</strong> folder) and select <strong>Insert</strong> or <strong>OK</strong>.</li>
            :
              <li className="mb-2">In the <strong>Edit signature</strong> box, press <kbd><kbd>Ctrl</kbd> + <kbd>v</kbd></kbd> on your keyboard to paste the signature you copied above.</li>
            }
            <li className="mb-2">Under <strong>Choose default signature</strong>, select the new signature you created under <strong>New messages</strong> and <strong>Replies/forwards</strong>, if you wish.</li>
            <li className="mb-2">To finish creating the signature, click <strong>OK</strong>.</li>
            <li className="mb-2">Close the new message. If you set the new signature as your default, it will appear in new emails from now on.</li>
          </ol>
          <p className="text-center mt-3 mb-1">
            <a
              href="https://support.office.com/en-us/article/create-and-add-a-signature-to-messages-8ee5d4f4-68fd-464a-a1c1-0e1c80bb27f2#ID0EAACAAA=2016,_2013"
              className="btn btn-outline-secondary btn-sm"
              target="_blank"
              rel="noopener noreferrer">
                Click here to learn more about how to edit your email signature in Outlook.
            </a>
          </p>
          <hr />
          <h2>General Email Guidelines</h2>
          <h3>Email Signatures</h3>
          <p><strong>Your email signature line should include the following basic information:</strong></p>
          <p>Full Name, Certifications/Credentials<br />
            Title, Practice or Department Name<br />
            Mailing Address<br />
            Phone:<br />
            Fax: (If used)<br />
            PCHC Logo
          </p>
          <div className="card bg-light mb-3">
            <div className="card-header">Email Signature Requirements for Providers</div>
            <div className="card-body">
              <p className="card-text">New law requires that email signatures from providers must include that <strong>provider’s full name, credentials, and common term for their profession</strong>.</p>
            </div>
          </div>
          <h3>Email Etiquette</h3>
          <p>
            Good email etiquette is essential for maintaining professionalism in PCHC communications. Here are some tips for keeping your emails clean, concise, and professional:
          </p>
          <ul>
            <li><strong>Don’t use background images or colors</strong>&nbsp;— They may look nice to you, but they don’t always look the same to the recipient. Depending on their email program, some formatting may be stripped out, making your email difficult to read against your background. It also adds unnecessary file size to the email. <strong>Always keep your background white.</strong></li>
            <li><strong>Use professional fonts and colors</strong>&nbsp;— Never use “cute” specialty fonts, such as Comic Sans or Papyrus as your default font, and if you’d like to change your default font color, try to keep it in the PCHC family of colors. Darker colors work best to maintain readability.</li>
            <li><strong>Don’t be sloppy</strong>&nbsp;— Email is a fairly informal means of communication, but should still be treated with more professionalism than mobile texting. Check your grammar,&nbsp;spelling, and punctuation — don’t use abbreviations for common words (such as ‘u’ for ‘you’, or ‘2’ for ‘to&nbsp;or too’), and watch out for commonly mixed up words, such as your &amp; you’re, its &amp; it’s, and there, their, &amp; they’re.</li>
            <li><strong>Keep messages simple</strong>&nbsp;— Try to keep your email to the point, and focus on one subject whenever possible.</li>
            <li><strong>Use sentence case</strong>&nbsp;— USING ALL CAPITAL LETTERS LOOKS AS IF YOU’RE SHOUTING. using all lowercase looks lazy. Use proper capitlization, and use&nbsp;<strong>bold</strong>&nbsp;or&nbsp;<em>italics</em>&nbsp;or *asterisks* for any necessary emphasis. Avoid using different text colors to highlight, however, because not everyone’s email program will display them properly.</li>
            <li><strong>Be careful with Reply All</strong>&nbsp;— Sometimes everyone needs to be included in a group discussion. Sometimes a mass email only needs a reply sent to the sender. Take some time to think about who needs to see your response before clicking Reply All.</li>
            <li><strong>Use the Subject field to indicate content or purpose</strong>&nbsp;— Try not to just say “Hi!” or leave it blank — an email’s subject helps the reader know at a glance what your email is about and find it in their inbox at a later time.</li>
            <li><strong>Remember your tone can’t be heard in email</strong>&nbsp;— Emotion and tone-of-voice is difficult or even impossible to convey in email, and readers may interpret messages in unintended ways. Keep that in mind before sending an email with some joking sarcasm or other messages that could be misread. Sometimes an emoticon can help to get your tone-of-voice across, but use those smileys sparingly so you don’t appear unprofessional. 😀</li>
          </ul>
        </div>
      </div>
    )
  }
}

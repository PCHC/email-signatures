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
        </div>
      </div>
    )
  }
}

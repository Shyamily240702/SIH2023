import React from 'react';
import './EmergencyInformation.css';

const EmergencyInformation = () => {
  return (
    <section className="emergency-information">
      <h2>Emergency Information</h2>

      {/* Emergency Contacts */}
      <div className="emergency-contacts">
        <h3>Emergency Contacts</h3>
        <ul>
          <li>
            <strong>Local Authorities:</strong> 911
          </li>
          <li>
            <strong>Fire Department:</strong> (555) 123-4567
          </li>
          <li>
            <strong>Police Department:</strong> (555) 789-1234
          </li>
          <li>
            <strong>Hospital:</strong> (555) 987-6543
          </li>
          {/* Add more emergency contacts */}
        </ul>
      </div>

      {/* Emergency Plans */}
      <div className="emergency-plans">
        <h3>Emergency Plans</h3>
        <p>Download our emergency plans and guides:</p>
        <ul>
          <li>
            <a href="/downloads/earthquake-safety-guide.pdf" target="_blank" rel="noopener noreferrer">
              Earthquake Safety Guide (PDF)
            </a>
          </li>
          <li>
            <a href="/downloads/hurricane-evacuation-plan.pdf" target="_blank" rel="noopener noreferrer">
              Hurricane Evacuation Plan (PDF)
            </a>
          </li>
          {/* Add more emergency plans */}
        </ul>
      </div>

      {/* Safety Tips */}
      <div className="safety-tips">
        <h3>Safety Tips</h3>
        <p>Stay safe with these essential safety tips:</p>
        <ul>
          <li>
            <strong>Fire Safety:</strong> In case of fire, stay low and crawl to the nearest exit.
          </li>
          <li>
            <strong>Earthquake Preparedness:</strong> Drop, cover, and hold on during an earthquake.
          </li>
          <li>
            <strong>Hurricane Safety:</strong> Evacuate to a safe location if advised by authorities.
          </li>
          {/* Add more safety tips */}
        </ul>
      </div>
    </section>
  );
}

export default EmergencyInformation;

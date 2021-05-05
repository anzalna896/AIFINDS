import React from "react";
import { Dropdown } from "semantic-ui-react";

const options = [
  { key: "angular", text: "Angular", value: "angular" },
  { key: "css", text: "CSS", value: "css" },
  { key: "design", text: "Graphic Design", value: "design" },
  { key: "ember", text: "Ember", value: "ember" },
  { key: "html", text: "HTML", value: "html" },
  { key: "ia", text: "Information Architecture", value: "ia" },
  { key: "javascript", text: "Javascript", value: "javascript" },
  { key: "mech", text: "Mechanical Engineering", value: "mech" },
  { key: "meteor", text: "Meteor", value: "meteor" },
  { key: "node", text: "NodeJS", value: "node" },
  { key: "plumbing", text: "Plumbing", value: "plumbing" },
  { key: "python", text: "Python", value: "python" },
  { key: "rails", text: "Rails", value: "rails" },
  { key: "react", text: "React", value: "react" },
  { key: "repair", text: "Kitchen Repair", value: "repair" },
  { key: "ruby", text: "Ruby", value: "ruby" },
  { key: "ui", text: "UI Design", value: "ui" },
  { key: "ux", text: "User Experience", value: "ux" },

  { key: "wa", text: "Web analytics", value: "WA" },
  { key: "seo", text: "Search Engine and Keyword Optimization", value: "seo" },
  { key: "bd", text: "Business Development", value: "bd" },
  { key: "crm", text: "Customer Relationship Management", value: "crm" },
  { key: "ig", text: "Infographics", value: "ig" },
  { key: "ad", text: "Ad design", value: "ad" },
  { key: "de", text: "Data entry", value: "de" },
  { key: "media", text: "Social media and mobile marketing", value: "media" },
  { key: "cn", text: "Cloud networking and file sharing ", value: "cn" },
  { key: "bda", text: "Big Data Analysis & SQL", value: "bda" },
  { key: "rda", text: "Research & Data analysis", value: "rda" },
  { key: "da", text: "Data analysis", value: "da" },
  { key: "sales", text: "Sales", value: "sales" },
  { key: "acls", text: "Advanced Cardiac Life Support (ACLS)", value: "acls" },
  { key: "ac", text: "Acute care", value: "ac" },
  { key: "tm", text: "Telemetry", value: "tm" },
  { key: "cpr", text: "CPR", value: "cpr" },
  { key: "ec", text: "Effective communication", value: "ec" }
];

const DropdownExampleMultipleSelection = () => (
  <Dropdown placeholder="Skills" fluid multiple selection options={options} />
);

export default DropdownExampleMultipleSelection;

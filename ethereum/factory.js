import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xD18FE44a08d16192E71cca4FB3c471FE669ECfdb"
);

export default instance;

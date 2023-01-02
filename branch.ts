import { SNSEventEmitter } from "./event/SNSEventEmitter";
import { Topic } from "./event/IEventEmitter";

async function run() {
  const publishSns = new SNSEventEmitter(Topic.BRANCH);

  const payload = {
    action: "save",
    store: {
      canonicalSearch: ["sede"],
      location: {
        __type: "GeoPoint",
        latitude: -30.0143653,
        longitude: -51.3160361,
      },
      addressLine1: "Av. das Indústrias",
      number: "1700",
      suburb: "Industrial",
      city: "Eldorado do Sul ",
      addressState: "RS",
      country: "BRA",
      zip: "92990000",
      retailer: {
        __type: "Pointer",
        className: "Retailer",
        objectId: "pXT6spei7F",
      },
      name: "LOja do ABC",
      createdAt: "2021-03-08T12:54:46.448Z",
      updatedAt: "2022-01-11T12:51:59.751Z",
      addressLine2: null,
      notify: [],
      identificator: "",
      ACL: {
        "role:pXT6spei7F_admin": {
          read: true,
          write: true,
        },
        "role:pXT6spei7F_everyone": {
          read: true,
        },
      },
      team: null,
      objectId: "M8zNTDN85x",
      serviceOthersCities: [{ state: "SP", city: "Ribeirão Preto" }],
    },
  };
  await publishSns.emit(payload);
  // await publishSns.list();
}

run();

import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@devfense/raffler",
  app: () => System.import("@devfense/raffler"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});

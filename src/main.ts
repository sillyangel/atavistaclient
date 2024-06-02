// Imports
import { require_all } from "./require_all";
import { clog } from "./util/clog";
import { clientName } from "./util/clientName";
import { Hud } from "./util/Hud";

ModAPI.clientBrand = clientName
require_all();
clog("both", "Initializing Client")

//Init Modules, and stuff
Hud();
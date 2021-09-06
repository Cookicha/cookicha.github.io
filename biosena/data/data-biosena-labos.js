const data = {
APIS: {sigle:"APIS", nom: "Unité expériementale abeilles paysages interactions et systèmes de culture", identifiant: "UE 1255", domaine: ["bio"], lieu: "StPierredAmilly", forces: 0, visible: 1, hover: 0, website: "https://www6.nouvelle-aquitaine-poitiers.inrae.fr/apis/"},
BIOGECO: {sigle:"Biogeco", nom: "Biodiversité gènes et communautés", identifiant: "UMR 1202", domaine: ["bio"], lieu: "Bordeaux", forces: 57, visible: 1, hover: 0, website: "https://www6.bordeaux-aquitaine.inrae.fr/biogeco"},
BIOGEVES: {sigle:"BioGeves", nom: "Laboratoire de biologie moléculaire et de biochimie", identifiant: "", domaine: ["bio"], lieu: "StPierredAmilly", forces: 0, visible: 1, hover: 0, website: "https://www.geves.fr/qui-sommes-nous/biogeves/"},
CEBC: {sigle:"CEBC", nom: "Centre d’études biologiques de Chizé", identifiant: "UMR 7372", domaine: ["bio"], lieu: "Chize", forces: 25, visible: 1, hover: 0, website: "https://www.cebc.cnrs.fr/"},
CEJEP: {sigle:"Cejep", nom: "Centre d’études juridiques et politiques", identifiant: "EA 3170", domaine: ["socio"], lieu: "LaRochelle", forces: 1, visible: 1, hover: 0, website: "https://cejep.univ-larochelle.fr/"},
CEREGE: {sigle:"Cerege", nom: "Centre de recherche en gestion", identifiant: "EA 1722", domaine: ["eco"], lieu: "Poitiers", forces: 9, visible: 1, hover: 0, website: "https://www.cerege.fr/"},
CRDEI: {sigle:"CRDEI", nom: "Centre de recherche et de documentation européennes et internationales", identifiant: "", domaine: ["socio"], lieu: "Bordeaux", forces: 4, visible: 1, hover: 0, website: "https://crdei.u-bordeaux.fr/"},
CRHIA: {sigle:"Crhia", nom: "Centre de recherches en histoire internationale et atlantique", identifiant: "EA 1163", domaine: ["hist"], lieu: "LaRochelle", forces: 0, visible: 1, hover: 0, website: "https://www.crhia.fr/"},
CRIEF: {sigle:"Crief", nom: "Centre de recherche sur l’intégration économique et financière", identifiant: "EA 2249", domaine: ["eco"], lieu: "Poitiers", forces: 4, visible: 1, hover: 0, website: "https://crief.labo.univ-poitiers.fr/"},
CRIHAM: {sigle:"Criham", nom: "Centre de recherche interdisciplinaire en histoire, histoire de l'art et musicologie", identifiant: "EA 4270", domaine: ["hist"], lieu: "Poitiers", forces: 6, visible: 1, hover: 0, website: "https://criham.labo.univ-poitiers.fr/"},
DURKHEIM: {sigle:"Centre Émile Durkheim", nom: "Science politique et sociologie comparative", identifiant: "UMR 5116", domaine: ["socio"], lieu: "Bordeaux", forces: 5, visible: 1, hover: 0, website: "https://durkheim.u-bordeaux.fr/"},
EABX: {sigle:"EABX", nom: "Écosystèmes aquatiques et changements globaux", identifiant: "", domaine: ["bio"], lieu: "Bordeaux", forces: 35, visible: 1, hover: 0, website: "https://www6.bordeaux-aquitaine.inrae.fr/eabx/EABX"},
EASM: {sigle:"EASM", nom: "Unité expérimentale Systèmes d’élevage avicoles alternatifs ", identifiant: "UE 1206", domaine: ["bio"], lieu: "StPierredAmilly", forces: 1, visible: 1, hover: 0, website: "https://www.inrae.fr/sites/default/files/easm.pdf"},
EBI: {sigle:"EBI", nom: "Écologie, biologie des interactions", identifiant: "UMR 7267", domaine: ["bio"], lieu: "Poitiers", forces: 51, visible: 1, hover: 0, website: "https://ebi.labo.univ-poitiers.fr/"},
ECOBIOP: {sigle:"Ecobiop", nom: "Écologie comportementale et biologie des populations de poissons", identifiant: "UMR 1224", domaine: ["bio"], lieu: "Pau", forces: 15, visible: 1, hover: 0, website: "https://www6.bordeaux-aquitaine.inrae.fr/st_pee/UMR-Ecobiop"},
EGFV: {sigle:"EGFV", nom: "Écophysiologie et génomique fonctionnelle de la vigne", identifiant: "UMR 1287", domaine: ["bio"], lieu: "Bordeaux", forces: 8, visible: 1, hover: 0, website: "https://www6.bordeaux-aquitaine.inrae.fr/egfv/"},
EPOC: {sigle:"Epoc", nom: "Environnements et paléoenvironnements océaniques et continentaux", identifiant: "UMR 5805", domaine: ["bio"], lieu: "Bordeaux", forces: 41, visible: 1, hover: 0, website: "https://www.epoc.u-bordeaux.fr/"},
ETBX: {sigle:"ETBX", nom: "Environnement, territoires et infrastructures", identifiant: "", domaine: ["socio"], lieu: "Bordeaux", forces: 40, visible: 1, hover: 0, website: "https://www6.bordeaux-aquitaine.inrae.fr/etbx/"},
GEOENV: {sigle:"GeoEnv", nom: "Géoressources et environnement", identifiant: "EA 4592", domaine: ["inge"], lieu: "Bordeaux", forces: 2, visible: 1, hover: 0, website: "http://geoenv.ensegid.fr/"},
GEOLAB: {sigle:"Geolab", nom: "Laboratoire de géographie physique et environnementale", identifiant: "UMR 6042", domaine: ["geo"], lieu: "Limoges", forces: 16, visible: 1, hover: 0, website: "https://www.unilim.fr/geolab/"},
GRETHA: {sigle:"Gretha", nom: "Groupe de recherche en économie théorique et appliquée", identifiant: "UMR 5113", domaine: ["eco"], lieu: "Bordeaux", forces: 12, visible: 1, hover: 0, website: "https://gretha.cnrs.fr/"},
IDP: {sigle:"IDP", nom: "Institut de droit public", identifiant: "", domaine: ["socio"], lieu: "Poitiers", forces: 1, visible: 1, hover: 0, website: "https://idp.labo.univ-poitiers.fr/"},
IMB: {sigle:"IMB", nom: "Institut de mathématiques de Bordeaux", identifiant: "UMR 5251", domaine: ["info"], lieu: "Bordeaux", forces: 2, visible: 1, hover: 0, website: "https://www.math.u-bordeaux.fr/imb/spip.php"},
IPREM: {sigle:"Iprem", nom: "Institut des sciences analytiques et de physico-chimie pour l’environnement et les matériaux", identifiant: "UMR 5254", domaine: ["inge"], lieu: "Pau", forces: 38, visible: 1, hover: 0, website: "https://iprem.univ-pau.fr/fr/index.html"},
ISPA: {sigle:"ISPA", nom: "Interaction sols plantes atmosphère", identifiant: "UMR ISPA", domaine: ["bio"], lieu: "Bordeaux", forces: 4, visible: 1, hover: 0, website: "https://www6.bordeaux-aquitaine.inrae.fr/ispa"},
L3I: {sigle:"L3i", nom: "Laboratoire informatique, image, interaction", identifiant: "EA 2118", domaine: ["info"], lieu: "LaRochelle", forces: 5, visible: 1, hover: 0, website: "https://l3i.univ-larochelle.fr/"},
LABRI: {sigle:"LABRI", nom: "Laboratoire bordelais de recherche en informatique", identifiant: "UMR 5800", domaine: ["info"], lieu: "Bordeaux", forces: 2, visible: 1, hover: 0, website: "https://www.labri.fr/"},
LERAR: {sigle:"Ler - Ar", nom: "Environnement ressources Arcachon/Anglet", identifiant: "", domaine: ["bio"], lieu: "Arcachon", forces: 11, visible: 1, hover: 0, website: "https://wwz.ifremer.fr/laboratoire_arcachon/"},
LERPC: {sigle:"Ler - PC", nom: "Environnement ressources Pertuis Charentais", identifiant: "", domaine: ["bio"], lieu: "LaTremblade", forces: 18, visible: 1, hover: 0, website: "https://wwz.ifremer.fr/lerpc/"},
LGPMM: {sigle:"LGPMM", nom: "Laboratoire de génétique et pathologie des mollusques marins", identifiant: "", domaine: ["bio"], lieu: "LaTremblade", forces: 1, visible: 1, hover: 0, website: "https://wwz.ifremer.fr/sg2m/Laboratoire-de-Genetique-et-Pathologie-des-Mollusques-Marins/Presentation-du-laboratoire"},
LIAS: {sigle:"LIAS", nom: "Laboratoire d'informatique et d'automatisme pour les systèmes", identifiant: "EA 6315", domaine: ["info"], lieu: "Poitiers", forces: 1, visible: 1, hover: 0, website: "https://www.lias-lab.fr/"},
LIENSS: {sigle:"Lienss", nom: "Littoral, environnements et sociétés", identifiant: "UMR 7266", domaine: ["bio","geo","socio"], lieu: "LaRochelle", forces: 48, visible: 1, hover: 0, website: "https://lienss.univ-larochelle.fr/"},
LMAP: {sigle:"LMAP", nom: "Laboratoire de mathématiques et de leurs applications", identifiant: "UMR 5142", domaine: ["info"], lieu: "Pau", forces: 1, visible: 1, hover: 0, website: "https://lma-umr5142.univ-pau.fr/fr/index.html"},
MIA: {sigle:"Mia", nom: "Mathématiques, images et applications", identifiant: "EA 3165", domaine: ["info"], lieu: "LaRochelle", forces: 1, visible: 1, hover: 0, website: "http://mia.univ-larochelle.fr/"},
MICA: {sigle:"Mica", nom: "Médiations informations communication arts", identifiant: "EA 4426", domaine: ["lettres"], lieu: "Bordeaux", forces: 2, visible: 1, hover: 0, website: "https://mica.u-bordeaux-montaigne.fr/"},
OENOLOGIE: {sigle:"Oenologie", nom: "Unité de recherche œnologie", identifiant: "EA 4577", domaine: ["bio"], lieu: "Bordeaux", forces: 2, visible: 1, hover: 0, website: "https://oenoresearch.u-bordeaux.fr/fr/"},
CRIDEAU: {sigle:"Omij - Crideau", nom: "Observatoire des mutations institutionnelles et juridiques - Centre de Recherches Interdisciplinaires en Droit de l’Environnement de l’Aménagement et de l’Urbanisme", identifiant: "EA 3177", domaine: ["socio"], lieu: "Limoges", forces: 4, visible: 1, hover: 0, website: "http://www.unilim.fr/crideau/"},
PACEA: {sigle:"Pacea", nom: "De la préhistoire à l'actuel : culture, environnement et anthropologie", identifiant: "UMR 5199", domaine: ["hist","bio"], lieu: "Bordeaux", forces: 6, visible: 1, hover: 0, website: "https://www.pacea.u-bordeaux.fr/"},
PALEVOPRIM: {sigle:"Palevoprim", nom: "Paléontologie, évolution, paléoécosystèmes, paléoprimatologie", identifiant: "UMR 7262", domaine: ["bio"], lieu: "Poitiers", forces: 8, visible: 1, hover: 0, website: "http://palevoprim.labo.univ-poitiers.fr/"},
PASSAGES: {sigle:"Passages", nom: "Reconfiguration des spatialités et changements globaux", identifiant: "UMR 5319", domaine: ["geo"], lieu: "Bordeaux", forces: 26, visible: 1, hover: 0, website: "https://www.passages.cnrs.fr/"},
PELAGIS: {sigle:"Pelagis", nom: "Observatoire des mammifères et oiseaux marins ", identifiant: "UMS 3462", domaine: ["bio"], lieu: "LaRochelle", forces: 22, visible: 1, hover: 0, website: "https://www.observatoire-pelagis.cnrs.fr/"},
RBE: {sigle:"RBE", nom: "Département ressources biologiques et environnement", identifiant: "PDG-RBE", domaine: ["bio"], lieu: "LaTremblade", forces: 1, visible: 1, hover: 0, website: "https://wwz.ifremer.fr/Recherche/Departements-scientifiques/Departement-Ressources-Biologiques-et-Environnement"},
RURALITES: {sigle:"Ruralités", nom: "Rural urbain liens environnement territoires sociétés", identifiant: "EA 2252", domaine: ["geo"], lieu: "Poitiers", forces: 12, visible: 1, hover: 0, website: "https://ruralites.labo.univ-poitiers.fr/"},
SAVE: {sigle:"Save", nom: "Santé et agroécologie du vignoble", identifiant: "UMR 1065", domaine: ["bio"], lieu: "Bordeaux", forces: 29, visible: 1, hover: 0, website: "https://www.agro-bordeaux.fr/lab/sante-et-agro-ecologie-du-vignoble/"},
SEV: {sigle:"SEV", nom: "Secteur d'étude des variétés", identifiant: "", domaine: ["bio"], lieu: "StPierredAmilly", forces: 0, visible: 1, hover: 0, website: "https://www.geves.fr/qui-sommes-nous/sev/"},
TREE: {sigle:"Tree", nom: "Transitions énergétiques et environnementales", identifiant: "UMR 6031", domaine: ["geo", "socio", "eco"], lieu: "Pau", forces: 15, visible: 1, hover: 0, website: "https://tree.univ-pau.fr/fr/index.html"},
GENESI: {sigle:"GenESI", nom: "Unité expérimentale élevages porcins alternatifs", identifiant: "UE 1372", domaine: ["bio"], lieu: "StPierredAmilly", forces: 0, visible: 1, hover: 0, website: "https://www6.nouvelle-aquitaine-poitiers.inrae.fr/genesi/"},
FERLUS: {sigle:"Ferlus", nom: "Unité expérimentale fourrage ruminants et environnement", identifiant: "UE 1373", domaine: ["bio"], lieu: "Lusignan", forces: 0, visible: 1, hover: 0, website: "https://www.agrisource.org/fr/7_108/5ce3d3fee7006540f8ff39ea/INRA%20-%20FERLUS.html"},
DSLP: {sigle:"UESLP", nom: "Unité expérimentale de Saint Laurent de la Prée", identifiant: "UE 0057", domaine: ["bio"], lieu: "StLaurentdelaPree", forces: 0, visible: 1, hover: 0, website: "https://www6.nouvelle-aquitaine-poitiers.inrae.fr/dslp/"},
UGMA: {sigle:"UGMA", nom: "Unité de génétique moléculaire animale", identifiant: "UMR 1061", domaine: ["bio"], lieu: "Limoges", forces: 18, visible: 1, hover: 0, website: "http://www.umr1061.unilim.fr/"},
URP3F: {sigle:"URP3F", nom: "Unité de recherche pluridisciplinaire prairies et plantes fourragères", identifiant: "UR 0004", domaine: ["bio"], lieu: "Lusignan", forces: 20, visible: 1, hover: 0, website: "https://www6.nouvelle-aquitaine-poitiers.inrae.fr/urp3f/"},
XLIM: {sigle:"Xlim", nom: "Xlim", identifiant: "UMR 7252", domaine: ["inge"], lieu: "Limoges", forces: 1, visible: 1, hover: 0, website: "https://www.xlim.fr/"}
}

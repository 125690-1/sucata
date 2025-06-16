// Lista de atendentes
const atendentesMRO = [
  "ADRIANO ACACIO DUARTE",
  "AGENOR ALVES DA SILVA",
  "ANTONIO MARCOS",
  "BRUNO SILVA",
  "CARLOS EDUARDO"
];

const receptadores = [
  "JOÃO PEREIRA",
  "LUCAS MENDES",
  "PAULO HENRIQUE",
  "RAFAEL GOMES"
];

const leads = [
  "DFD-AI-07B",
  "DFD-AI-13B",
  "DFD-AI-15B",
  "DFD-AI-16B",
  "DFD-AI-17B",
  "DFD-AP-01C",
  "DFD-AP-01D",
  "DFD-AP-02B",
  "DFD-AP-02C",
  "DFD-AP-03C",
  "DFD-AP-04D",
  "DFD-AP-05C",
  "DFD-AP-07B",
  "DFD-AP-08C",
  "DFD-AP-10C",
  "DFD-AP-11C",
  "DFD-AP-12B",
  "DFD-AP-14B",
  "DFD-AP-15B",
  "DFD-AP-30B",
  "DFD-AP-30C",
  "DFD-AP-31B",
  "DFD-AP-31C",
  "DFD-AP-32B",
  "DFD-AP-32C",
  "DFD-AP-33B",
  "DFD-AP-33C",
  "DFD-AP-34C",
  "DFD-EP-61B",
  "DFD-LL-41B",
  "DFD-LL-43B",
  "DFD-LR-48B",
  "DFD-LR-49B",
  "DFD-PP-66B",
  "DFD-PP-67B",
  "DFD-RD-01B",
  "DFD-RD-01C",
  "DFD-RD-02C",
  "DFD-RD-03B",
  "DFD-RD-03C",
  "DFD-RD-04B",
  "DFD-RD-04C",
  "DFD-RD-05B",
  "DFD-RD-05C",
  "DFD-RD-06B",
  "DFD-RD-07B",
  "DFD-RD-10C",
  "DFD-RD-12C",
  "DFD-RD-14B",
  "DFD-RD-16B",
  "DFD-RD-17B",
  "DFD-SG-01B",
  "DFD-SG-01C",
  "DFD-SG-01D",
  "DFD-SG-02B",
  "DFD-SG-02C",
  "DFD-SG-02D",
  "DFD-SG-03B",
  "DFD-SG-03C",
  "DFD-SG-03D",
  "DFD-SG-04B",
  "DFD-SG-04C",
  "DFD-SG-04D",
  "DFD-SG-05B",
  "DFD-SG-05C",
  "DFD-SG-05D",
  "DFD-SG-06B",
  "DFD-SG-06C",
  "DFD-SG-07B",
  "DFD-SG-07C",
  "DFD-SG-08B",
  "DFD-SG-08C",
  "DFD-SG-09B",
  "DFD-SG-09C",
  "DFD-SG-11C",
  "DFD-SG-12B",
  "DFD-SG-12C",
  "DFD-SG-13B",
  "DFD-SG-14B",
  "DFD-SG-15B",
  "DFD-SG-16B",
  "DFD-SG-17B",
  "DFD-SG-18B",
  "DFD-SG-30B",
  "DFD-SG-30C",
  "DFD-SG-31B",
  "DFD-SG-31C",
  "DFD-SG-32B",
  "DFD-SG-33B",
  "DFD-SG-34B",
  "DFD-SG-35B",
  "DFD-SI-01C",
  "DFD-SI-01D",
  "DFD-SI-02C",
  "DFD-SI-02D",
  "DFD-SI-03D",
  "DFD-SI-04D",
  "DFD-SI-05B",
  "DFD-SI-05D",
  "DFD-SI-06B",
  "DFD-SI-06C",
  "DFD-SI-07B",
  "DFD-SI-08B",
  "DFD-SI-09C",
  "DFD-SI-10C",
  "DFD-SI-13B",
  "DFD-SI-14B",
  "DFD-SI-15B",
  "DFD-SI-16B",
  "DFD-SI-17B",
  "DFJ-AI-01C",
  "DFJ-AI-14B",
  "DFJ-AI-14C",
  "DFJ-AI-21B",
  "DFJ-AI-22B",
  "DFJ-AP-01B",
  "DFJ-AP-01C",
  "DFJ-AP-01D",
  "DFJ-AP-02B",
  "DFJ-AP-02C",
  "DFJ-AP-02D",
  "DFJ-AP-03B",
  "DFJ-AP-03C",
  "DFJ-AP-04B",
  "DFJ-AP-04C",
  "DFJ-AP-05C",
  "DFJ-AP-05D",
  "DFJ-AP-06B",
  "DFJ-AP-06C",
  "DFJ-AP-07C",
  "DFJ-AP-08B",
  "DFJ-AP-08C",
  "DFJ-AP-09B",
  "DFJ-AP-09C",
  "DFJ-AP-10B",
  "DFJ-AP-10C",
  "DFJ-AP-11B",
  "DFJ-AP-11C",
  "DFJ-AP-12C",
  "DFJ-AP-13B",
  "DFJ-AP-13C",
  "DFJ-AP-14B",
  "DFJ-AP-14C",
  "DFJ-AP-15B",
  "DFJ-AP-15C",
  "DFJ-AP-16B",
  "DFJ-AP-16C",
  "DFJ-AP-17B",
  "DFJ-AP-18B",
  "DFJ-AP-19B",
  "DFJ-AP-20B",
  "DFJ-AP-21B",
  "DFJ-AP-22B",
  "DFJ-AP-30B",
  "DFJ-AP-30C",
  "DFJ-AP-31B",
  "DFJ-AP-31C",
  "DFJ-AP-32B",
  "DFJ-AP-32C",
  "DFJ-AP-33B",
  "DFJ-AP-33C",
  "DFJ-AP-34B",
  "DFJ-AP-35B",
  "DFJ-EP-01B",
  "DFJ-EP-01D",
  "DFJ-EP-02B",
  "DFJ-EP-02D",
  "DFJ-LC-01B",
  "DFJ-LE-01B",
  "DFJ-LE-02B",
  "DFJ-LR-02B",
  "DFJ-LR-03B",
  "DFJ-PD-01B",
  "DFJ-PD-02B",
  "DFJ-PD-03B",
  "DFJ-PD-04B",
  "DFJ-PD-05B",
  "DFJ-PD-06B",
  "DFJ-PD-10B",
  "DFJ-PD-13B",
  "DFJ-PD-15B",
  "DFJ-PD-18B",
  "DFJ-PK-01B",
  "DFJ-RD-01C",
  "DFJ-RD-02C",
  "DFJ-RD-03C",
  "DFJ-RD-04C",
  "DFJ-RD-06C",
  "DFJ-RD-07C",
  "DFJ-RD-08B",
  "DFJ-RD-08C",
  "DFJ-RD-10C",
  "DFJ-RD-11C",
  "DFJ-RD-12C",
  "DFJ-RD-13B",
  "DFJ-RD-14B",
  "DFJ-RD-15C",
  "DFJ-RD-16C",
  "DFJ-RD-18B",
  "DFJ-RD-20B",
  "DFJ-RD-21B",
  "DFJ-RT-16B",
  "DFJ-SG-01B",
  "DFJ-SG-01C",
  "DFJ-SG-01D",
  "DFJ-SG-02B",
  "DFJ-SG-02C",
  "DFJ-SG-02D",
  "DFJ-SG-03B",
  "DFJ-SG-03C",
  "DFJ-SG-03D",
  "DFJ-SG-04B",
  "DFJ-SG-04C",
  "DFJ-SG-04D",
  "DFJ-SG-05B",
  "DFJ-SG-05C",
  "DFJ-SG-05D",
  "DFJ-SG-06B",
  "DFJ-SG-06C",
  "DFJ-SG-07C",
  "DFJ-SG-08B",
  "DFJ-SG-08C",
  "DFJ-SG-09B",
  "DFJ-SG-09C",
  "DFJ-SG-10B",
  "DFJ-SG-10C",
  "DFJ-SG-11B",
  "DFJ-SG-11C",
  "DFJ-SG-12C",
  "DFJ-SG-13B",
  "DFJ-SG-13C",
  "DFJ-SG-14B",
  "DFJ-SG-14C",
  "DFJ-SG-15B",
  "DFJ-SG-15C",
  "DFJ-SG-16B",
  "DFJ-SG-16C",
  "DFJ-SG-17B",
  "DFJ-SG-18B",
  "DFJ-SG-19B",
  "DFJ-SG-20B",
  "DFJ-SG-21B",
  "DFJ-SG-22B",
  "DFJ-SG-30B",
  "DFJ-SG-30C",
  "DFJ-SG-31B",
  "DFJ-SG-31C",
  "DFJ-SG-32B",
  "DFJ-SG-32C",
  "DFJ-SG-33B",
  "DFJ-SG-33C",
  "DFJ-SG-34B",
  "DFJ-SG-34C",
  "DFJ-SG-35B",
  "DFJ-SG-35C",
  "DFJ-SG-36B",
  "DFJ-SG-36C",
  "DFJ-SG-37B",
  "DFJ-SG-37C",
  "DFJ-SG-38B",
  "DFJ-SG-39B",
  "DFJ-SI-01C",
  "DFJ-SI-01D",
  "DFJ-SI-02B",
  "DFJ-SI-02C",
  "DFJ-SI-02D",
  "DFJ-SI-03B",
  "DFJ-SI-03C",
  "DFJ-SI-03D",
  "DFJ-SI-04D",
  "DFJ-SI-05C",
  "DFJ-SI-05D",
  "DFJ-SI-06B",
  "DFJ-SI-06C",
  "DFJ-SI-08C",
  "DFJ-SI-09B",
  "DFJ-SI-10B",
  "DFJ-SI-10C",
  "DFJ-SI-12C",
  "DFJ-SI-13B",
  "DFJ-SI-13C",
  "DFJ-SI-14B",
  "DFJ-SI-14C",
  "DFJ-SI-15C",
  "DFJ-SI-21B",
  "DFJ-SI-22B",
  "DFJ-SP-07C",
  "DFM-AP-01B",
  "DFM-AP-01C",
  "DFM-AP-02C",
  "DFM-AP-04C",
  "DFM-AP-05C",
  "DFM-AP-30B",
  "DFM-AP-30C",
  "DFM-AP-31B",
  "DFM-AP-31C",
  "DFM-AP-32B",
  "DFM-AP-32C",
  "DFM-AP-33B",
  "DFM-AP-33C",
  "DFM-AP-34B",
  "DFM-AP-34C",
  "DFM-AP-35C",
  "DFM-PD-07B",
  "DFM-PD-08B",
  "DFM-PD-10B",
  "DFM-PD-11B",
  "DFM-PD-12B",
  "DFM-RD-01B",
  "DFM-RD-01C",
  "DFM-RD-03B",
  "DFM-RD-03C",
  "DFM-RD-05C",
  "DFM-RD-06B",
  "DFM-RD-06C",
  "DFM-RD-07B",
  "DFM-RD-07C",
  "DFM-RD-08B",
  "DFM-RD-09B",
  "DFM-RD-10B",
  "DFM-RD-12B",
  "DFM-RD-13B",
  "DFM-SG-01B",
  "DFM-SG-01C",
  "DFM-SG-02B",
  "DFM-SG-02C",
  "DFM-SG-03B",
  "DFM-SG-03C",
  "DFM-SG-04B",
  "DFM-SG-04C",
  "DFM-SG-05C",
  "DFM-SG-06B",
  "DFM-SG-06C",
  "DFM-SG-07B",
  "DFM-SG-07C",
  "DFM-SG-08B",
  "DFM-SG-09B",
  "DFM-SG-10B",
  "DFM-SG-11B",
  "DFM-SG-12B",
  "DFM-SG-13B",
  "DFM-SG-30B",
  "DFM-SG-31B",
  "DFM-SG-31C",
  "DFM-SG-33C",
  "DFM-SI-01B",
  "DFM-SI-04C",
  "DFM-SI-10B",
];

const materiaisLista = [
  { codigo: "141431", descricao: "SEC,UNIP,24KV,400A,20KA,125/150KV,SUCATA", un: "UN" },
  { codigo: "820106", descricao: "SUCATA DE OUTROS", un: "KG" },
  { codigo: "141430", descricao: "SEC,UNIP,15KV, 400A,20KA,95/110KV,SUCATA", un: "UN" },
  { codigo: "310800", descricao: "CABO,AÇO-CU,RD CU,3X10AWG,LC,SUCATA", un: "KG" },
  { codigo: "231605", descricao: "POSTE,CONC,DT, 9M,300DAN,B,RD/SED,SUCATA", un: "UN" },
  { codigo: "310805", descricao: "CABO,CU NU, 25MM2,7F,MEIO-DURO,SUCATA", un: "KG" },
  { codigo: "111736", descricao: "TRAFO,3F, 15KVA,14145/380-220V,SUCATA", un: "UN" },
  { codigo: "500275", descricao: "REGULADOR, TENSAO, MONOF 200KVA 199(SUC)", un: "UN" },
  { codigo: "330890", descricao: "CABO,CONCEN;CU;0,6/1KV;2X10MM2;SUCATA", un: "M" },
  { codigo: "111744", descricao: "TRAFO,3F, 112.5KVA,14145/380-220V,SUCATA", un: "UN" },
  { codigo: "310838", descricao: "CABO,NU CAA, 4AWG,6/1F,SWAN,SUCATA", un: "KG" },
  { codigo: "330884", descricao: "CABO,CONCENT,AL,0,6/1KV,2X10MM2,SUCATA", un: "M" },
  { codigo: "330883", descricao: "CABO,PRE-REUN,BT,CU,3X95-1X50,SUCATA", un: "M" },
  { codigo: "330920", descricao: "CABO,CU ISOL,XLPE,0,6/1KV, 35MM2,SUCATA", un: "M" },
  { codigo: "231604", descricao: "POSTE,CONC,DT, 9M,150DAN,D,RD,SUCATA", un: "UN" },
  { codigo: "231658", descricao: "POSTE,CONC,DT,10.5M, 150DAN,D,RD,SUCATA.", un: "UN" },
  { codigo: "970779", descricao: "SUCATA DE CONCRETO", un: "UN" },
  { codigo: "330921", descricao: "CABO,CU ISOL,XLPE,0,6/1KV, 50MM2,SUCATA", un: "M" },
  { codigo: "330907", descricao: "CABO,CONCENT,AL,0,6/1KV,2X 6MM2,SUCATA", un: "M" },
  { codigo: "310807", descricao: "CABO,CU NU, 50MM2,7F,MEIO-DURO,SUCATA", un: "KG" },
  { codigo: "111746", descricao: "TRAFO,3F, 150KVA,14145/380-220V,SUCATA", un: "UN" },
  { codigo: "111742", descricao: "TRAFO,3F, 75KVA,14145/380-220V,SUCATA", un: "UN" },
  { codigo: "330891", descricao: "CABO,CONCEN;CU;0,6/1KV;2X 6MM2;SUCATA", un: "M" },
  { codigo: "330887", descricao: "CABO,PRE-REUN,BT,AL,3X 50-1X50,SUCATA", un: "M" },
  { codigo: "111734", descricao: "TRAFO,3F, 10KVA,14145/380-220V,SUCATA", un: "UN" },
  { codigo: "231584", descricao: "POSTE,CONC,DT,12M, 600DAN,B,RD,SUCATA", un: "UN" },
  { codigo: "310806", descricao: "CABO,CU NU, 35MM2,7F,MEIO-DURO,SUCATA", un: "KG" },
  { codigo: "111740", descricao: "TRAFO,3F, 45KVA,14145/380-220V,SUCATA", un: "UN" },
  { codigo: "231582", descricao: "POSTE,CONC,DT,12M, 300DAN,B,RD,SUCATA", un: "UN" },
  { codigo: "231994", descricao: "POSTE, CONC DT; 9M; 300DAN;SUCATA", un: "UN" },
  { codigo: "310797", descricao: "CABO,AÇO-AL,RD AL,3X 8AWG,HS,SUCATA", un: "KG" },
  { codigo: "231579", descricao: "POSTE,CONC,DT,11M, 300DAN,B,SUCATA", un: "UN" },
  { codigo: "330943", descricao: "CABO,NU CAA, 1/0AWG,6/1F,RAVEN,SUCATA", un: "KG" },
  { codigo: "310826", descricao: "CABO,CU NU, 95MM2,19F,MEIO-DURO,SUCATA", un: "KG" },
  { codigo: "111778", descricao: "TRAFO,3F,ORLA, 45KVA,380/220V,SUCATA.", un: "UN" },
  { codigo: "112201", descricao: "TRAFO TRIFÁSICO 112,5KVA - SUCATA;", un: "PEÇ" },
  { codigo: "330950", descricao: "CABO,PRE-REUN,BT,CU,3X25-1X25,SUCATA", un: "M" },
  { codigo: "111738", descricao: "TRAFO,3F, 30KVA,14145/380-220V,SUCATA", un: "UN" },
  { codigo: "310837", descricao: "CABO,NU CA, 1/0AWG,7F,POPPY,SUCATA", un: "KG" },
  { codigo: "310808", descricao: "CABO,CU NU, 16MM2,7F,MEIO-DURO,SUCATA", un: "KG" },
  { codigo: "111774", descricao: "TRAFO,1F,FF,10KVA,14145/220V,SUCATA.", un: "UN" },
  { codigo: "231580", descricao: "POSTE,CONC,DT,11M, 600DAN,B,SUCATA", un: "UN" },
  { codigo: "330889", descricao: "CABO,PRE-REUN,BT,CU,3X35-1X35,SUCATA", un: "M" },
  { codigo: "330882", descricao: "CABO,CONCEN;CU;0,6/1KV;2X 4MM2;SUCATA", un: "M" },
  { codigo: "231600", descricao: "POSTE,CONC,DT, 7M,100DAN,D,JARDIM,SUCATA", un: "UN" },
  { codigo: "330918", descricao: "CABO,CU ISOL,XLPE,0,6/1KV, 16MM2,SUCATA", un: "M" },
  { codigo: "330919", descricao: "CABO,CU ISOL,XLPE,0,6/1KV, 25MM2,SUCATA", un: "M" },
  { codigo: "231573", descricao: "POSTE,CONC,DT,10.5M, 600DAN,B,RD,SUCATA", un: "UN" },
  { codigo: "231659", descricao: "POSTE,CONC,DT,10.5M, 300DAN,B,RD,SUCATA.", un: "UN" },
  { codigo: "111748", descricao: "TRAFO,3F, 225KVA,14145/380-220V,SUCATA", un: "UN" },
  { codigo: "330885", descricao: "CABO,PRE-REUN;BT;AL;3X 95-1X50;SUCATA", un: "M" },
  { codigo: "330944", descricao: "CABO,NU CAA,266.8MCM,26/7F,PART,SUCATA", un: "KG" },
  { codigo: "330888", descricao: "CABO,PRE-REUN;BT;AL;3X 25-1X50;SUCATA", un: "M" },
  { codigo: "330886", descricao: "CABO,PRE-REUN,BT,AL,1X25-1X25,SUCATA", un: "M" },
  { codigo: "111403", descricao: "TRAFO,1F,FT,15KVA,7967-220V,SUCATA", un: "UN" },
  { codigo: "310803", descricao: "CABO,AÇO-CU,RD CU,7X10AWG,LC,SUCATA", un: "KG" },
  { codigo: "330945", descricao: "CABO,PRE-REUN,BT,AL,3X 35-1X50,SUCATA", un: "M" },
  { codigo: "231672", descricao: "POSTE,CONC,DT,10M, 150DAN,D,SUCATA", un: "UN" },
  { codigo: "330946", descricao: "CABO,PRE-REUN,BT,AL,3X150-1X70,SUCATA", un: "M" },
  { codigo: "820104", descricao: "FIO,CABO COBRE ISOLADO-DIV TIP-SUCATA", un: "KG" },
  { codigo: "310836", descricao: "CABO,NU CA, 4AWG,7F,ROSE,SUCATA", un: "KG" },
  { codigo: "164692", descricao: "CAPACITOR,POT;DERIV;100KVAR;7960V;SUCATA", un: "UN" },
  { codigo: "330915", descricao: "CABO,CONCENT,AL.0,6/1KV,2X16MM2,SUCATA", un: "M" },
  { codigo: "350540", descricao: "CABO,AL SPAC,25KV, 50MM2,2CAM,BLQ,SUCATA", un: "M" },
  { codigo: "310801", descricao: "CABO,AÇO-CU,RD CU,7X 6AWG,LC,SUCATA", un: "KG" },
  { codigo: "231586", descricao: "POSTE,CONC,DT,12M,1000DAN,B-1.5,SUCATA", un: "UN" },
  { codigo: "141307", descricao: "SECCION 3F B CARGA 24KV 400A 12KA SUCATA", un: "CDA" },
  { codigo: "231598", descricao: "POSTE,FIBRA VIDRO,12M, 600DAN,SUCATA", un: "UN" },
  { codigo: "310799", descricao: "CABO,AÇO-CU,RD CU,3X 8AWG,LC,SUCATA", un: "KG" },
  { codigo: "350543", descricao: "CABO,AL SPAC,25KV,240MM2,2CAM,BLQ,SUCATA", un: "M" },
  { codigo: "180730", descricao: "RGDAT A70/C RELE PROT E IND SUCATA", un: "PEÇ" },
  { codigo: "141433", descricao: "SECCION 3F B CARGA 24KV 630A 16KA SUCATA", un: "CDA" },
  { codigo: "350542", descricao: "CABO,AL SPAC,25KV,185MM2,2CAM,BLQ,SUCATA", un: "M" },
  { codigo: "231576", descricao: "POSTE,CONC,DT,10M, 300DAN,B,SUCATA", un: "UN" },
  { codigo: "330937", descricao: "CABO,POT,PRE-REUN,AL,15-3X 50+50,SUCATA", un: "M" },
  { codigo: "231592", descricao: "POSTE,FIBRA VIDRO, 9M,300DAN,SUCATA", un: "UN" },
  { codigo: "820102", descricao: "FIO E CABO CU NU - DIV TIPOS - SUCATA", un: "KG" },
  { codigo: "231601", descricao: "POSTE,CONC,DT, 8M,100DAN,SUCATA", un: "UN" },
  { codigo: "231602", descricao: "POSTE,CONC,DT, 8M,150DAN,D,ESUCATA", un: "UN" },
  { codigo: "330923", descricao: "CABO,CU ISOL,XLPE,0,6/1KV, 95MM2,SUCATA", un: "M" },
  { codigo: "310825", descricao: "CABO,CU NU, 70MM2,19F,MEIO-DURO,SUCATA", un: "KG" },
  { codigo: "330911", descricao: "CABO,AL,SPACER,15KV, 70MM2,SUCATA", un: "M" },
  { codigo: "330914", descricao: "CABO,AL,SPACER,15KV,240MM2,SUCATA", un: "M" },
  { codigo: "231577", descricao: "POSTE,CONC,DT,10M, 600DAN,B,SUCATA", un: "UN" },
  { codigo: "111780", descricao: "TRAFO,3F,ORLA, 75KVA,380-220V,SUCATA.", un: "UN" },
  { codigo: "231606", descricao: "POSTE,CONC,DT, 9M,600DAN,B,RD,SUCATA", un: "UN" },
  { codigo: "231647", descricao: "POSTE,CONC DT; 10,5M; 1000DAN;SUCATA", un: "UN" },
];

const datalistAtendentes = document.getElementById("atendentes-mro");
atendentesMRO.forEach(nome => {
  const option = document.createElement("option");
  option.value = nome;
  datalistAtendentes.appendChild(option);
});

const datalistReceptador = document.getElementById("receptador");
receptadores.forEach(nome => {
  const option = document.createElement("option");
  option.value = nome;
  datalistReceptador.appendChild(option);
});

const datalistLeads = document.getElementById("leads");
leads.forEach(nome => {
  const option = document.createElement("option");
  option.value = nome;
  datalistLeads.appendChild(option);
});

// Preenche datalist de CÓDIGOS
const datalistCodigos = document.getElementById("lista-codigos");
materiaisLista.forEach(mat => {
  const option = document.createElement("option");
  option.value = mat.codigo;
  datalistCodigos.appendChild(option);
});

// Preenche datalist de DESCRIÇÕES
const datalistDescricoes = document.getElementById("lista-descricoes");
materiaisLista.forEach(mat => {
  const option = document.createElement("option");
  option.value = mat.descricao;
  datalistDescricoes.appendChild(option);
});

// Detecta alterações e preenche automaticamente os campos
document.addEventListener("input", (e) => {
  const row = e.target.closest("tr");
  if (!row) return;

  const inputCodigo = row.querySelector(".codigo");
  const inputDescricao = row.querySelector(".descricao");
  const inputUN = row.querySelector(".un");

  // Se código for alterado
  if (e.target.classList.contains("codigo")) {
    const encontrado = materiaisLista.find(mat => mat.codigo === inputCodigo.value);
    if (encontrado) {
      inputDescricao.value = encontrado.descricao;
      inputUN.value = encontrado.un;
    } else {
      inputDescricao.value = "";
      inputUN.value = "";
    }
  }

  // Se descrição for alterada
  if (e.target.classList.contains("descricao")) {
    const encontrado = materiaisLista.find(mat => mat.descricao === inputDescricao.value);
    if (encontrado) {
      inputCodigo.value = encontrado.codigo;
      inputUN.value = encontrado.un;
    } else {
      inputCodigo.value = "";
      inputUN.value = "";
    }
  }
});

function adicionarLinhaTabela() {
  const tabela = document.getElementById("tabela-materiais");
  for (let i = 0; i < 22; i++) {
    const linha = document.createElement("tr");
    
    const cod = document.createElement("td");
    const desc = document.createElement("td");
    const un = document.createElement("td");
    const qtd = document.createElement("td");

    const inputCod = document.createElement("input");
    inputCod.readOnly = true;

    const inputDesc = document.createElement("input");
    inputDesc.setAttribute("list", "lista-descricoes");
    inputDesc.addEventListener("change", function () {
      const material = materiaisLista.find(mat => mat.descricao === inputDesc.value);
      if (material) {
        inputCod.value = material.codigo;
        inputUn.value = material.un;
      }
    });

    const inputUn = document.createElement("input");
    inputUn.readOnly = true;

    const inputQtd = document.createElement("input");
    inputQtd.type = "text";

    cod.appendChild(inputCod);
    desc.appendChild(inputDesc);
    un.appendChild(inputUn);
    qtd.appendChild(inputQtd);

    linha.appendChild(cod);
    linha.appendChild(desc);
    linha.appendChild(un);
    linha.appendChild(qtd);

    tabela.appendChild(linha);
  }
}

adicionarLinhaTabela();

function mostrarCampoOS(tipo) {
  const container = document.getElementById("os-container");
  container.innerHTML = "";

  const label = document.createElement("label");
  label.textContent = "Ordem de Serviço";

  const input = document.createElement("input");
  input.id = "campo-os";
  input.maxLength = 10;

  if (tipo === "INC") {
    input.type = "number";
    input.placeholder = "Somente números";
    input.maxLength = 8;
  } else if (tipo === "DT" || tipo === "BA") {
    input.value = tipo;
    input.addEventListener("input", function () {
      if (!input.value.startsWith(tipo)) {
        input.value = tipo;
      }
    });
  }

  container.appendChild(label);
  container.appendChild(input);
}

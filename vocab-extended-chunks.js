// Spanish Maestro — Extended Vocabulary: Verb Chunks
// High-frequency verb expressions learned as fixed phrases
// These are the building blocks of natural spoken Spanish

const VOCAB_EXT_CHUNKS = {

"Tener Expressions": [
  {es:"tener hambre",       en:"to be hungry",             type:"chunk", ex:"Tengo mucha hambre. ¿Comemos algo?",              hint:"tener = to have. Spanish says 'have hunger', not 'be hungry'", level:"A1"},
  {es:"tener sed",          en:"to be thirsty",            type:"chunk", ex:"¿Tienes sed? Hay agua en la nevera.",              hint:"tener sed — have thirst", level:"A1"},
  {es:"tener frío",         en:"to be cold (person)",      type:"chunk", ex:"Tengo frío — ¿puedes cerrar la ventana?",          hint:"tener frío = have coldness (you feel cold). hacer frío = the weather is cold", level:"A1"},
  {es:"tener calor",        en:"to be hot (person)",       type:"chunk", ex:"Tengo mucho calor aquí dentro.",                   hint:"tener calor = feel hot. hacer calor = weather is hot", level:"A1"},
  {es:"tener sueño",        en:"to be sleepy",             type:"chunk", ex:"Tengo sueño — me voy a dormir.",                   hint:"sueño = dream/sleep. tener sueño = have sleepiness", level:"A1"},
  {es:"tener miedo de",     en:"to be afraid of",          type:"chunk", ex:"Tengo miedo de las arañas.",                       hint:"miedo = fear. tener miedo de = have fear of", level:"A2"},
  {es:"tener razón",        en:"to be right",              type:"chunk", ex:"Tienes razón — me equivoqué.",                     hint:"razón = reason. tener razón = have reason = be right", level:"A2"},
  {es:"tener prisa",        en:"to be in a hurry",         type:"chunk", ex:"Tengo prisa — llegaré tarde.",                     hint:"prisa = hurry. tener prisa = be in a rush", level:"A2"},
  {es:"tener ganas de",     en:"to feel like / want to",   type:"chunk", ex:"Tengo ganas de viajar este verano.",               hint:"ganas = desire. tener ganas de + inf = to feel like doing", level:"A2"},
  {es:"tener cuidado",      en:"to be careful",            type:"chunk", ex:"Ten cuidado con el escalón.",                      hint:"cuidado = care. ¡Ten cuidado! = Be careful!", level:"A2"},
  {es:"tener suerte",       en:"to be lucky",              type:"chunk", ex:"¡Qué suerte tienes!",                              hint:"suerte = luck. tener suerte = have luck", level:"A2"},
  {es:"tener en cuenta",    en:"to bear in mind / consider",type:"chunk",ex:"Hay que tener en cuenta el precio.",               hint:"cuenta = account. tener en cuenta = take into account", level:"B1"},
  {es:"tener lugar",        en:"to take place",            type:"chunk", ex:"La reunión tendrá lugar el lunes.",                hint:"lugar = place. tener lugar = take place (formal)", level:"B1"},
  {es:"tener que ver con",  en:"to have to do with",       type:"chunk", ex:"Esto no tiene nada que ver conmigo.",              hint:"tener que ver con = to be related to/have to do with", level:"B1"},
  {es:"no tener ni idea",   en:"to have no idea",          type:"chunk", ex:"No tengo ni idea de dónde están las llaves.",      hint:"ni = not even. no tener ni idea = have not even an idea", level:"A2"},
],

"Hacer Expressions": [
  {es:"hacer falta",        en:"to be necessary / to need", type:"chunk", ex:"Hace falta más práctica.",                       hint:"falta = lack. hace falta = it is needed/necessary", level:"A2"},
  {es:"hacer daño",         en:"to hurt / cause harm",     type:"chunk", ex:"Me hace daño la espalda.",                        hint:"daño = harm/damage. hacer daño = to hurt", level:"A2"},
  {es:"hacer caso",         en:"to pay attention / listen", type:"chunk", ex:"No me hizo caso cuando le avisé.",               hint:"caso = case/attention. hacer caso = to heed/listen to", level:"B1"},
  {es:"hacer falta",        en:"to miss (someone)",        type:"chunk", ex:"Me haces mucha falta.",                           hint:"me haces falta = I miss you (lit: you are needed by me)", level:"B1"},
  {es:"hacerse tarde",      en:"to get late",              type:"chunk", ex:"Se está haciendo tarde — mejor nos vamos.",       hint:"hacerse = to become. se hace tarde = it's getting late", level:"A2"},
  {es:"hacer el ridículo",  en:"to make a fool of oneself",type:"chunk", ex:"No quiero hacer el ridículo delante de todos.",   hint:"ridículo = ridiculous. hacer el ridículo = make a fool", level:"B1"},
  {es:"hacer las paces",    en:"to make peace / make up",  type:"chunk", ex:"Ya hicimos las paces después de la pelea.",       hint:"paces = plural of paz (peace). hacer las paces = reconcile", level:"B1"},
  {es:"hacer una pregunta", en:"to ask a question",        type:"chunk", ex:"¿Puedo hacerte una pregunta?",                    hint:"In Spanish you 'make' a question, not 'ask' one", level:"A1"},
  {es:"hacer una foto",     en:"to take a photo",          type:"chunk", ex:"¿Te puedo hacer una foto?",                      hint:"LatAm: hacer/tomar una foto. Spain: hacer/sacar una foto", level:"A1"},
  {es:"hacer un viaje",     en:"to take a trip",           type:"chunk", ex:"El año que viene hago un viaje a Perú.",          hint:"hacer un viaje = to make/take a trip", level:"A1"},
],

"Dar Expressions": [
  {es:"dar las gracias",    en:"to thank / give thanks",   type:"chunk", ex:"Quiero dar las gracias a todos.",                 hint:"gracias = thanks. dar las gracias = give thanks", level:"A2"},
  {es:"dar igual",          en:"to not matter / be all the same", type:"chunk", ex:"Me da igual — lo que quieras.",            hint:"⭐ me da igual = I don't mind / it's all the same to me", level:"A2"},
  {es:"dar miedo",          en:"to be scary / frighten",   type:"chunk", ex:"Las arañas me dan mucho miedo.",                  hint:"like gustar: me da miedo = it scares me", level:"A2"},
  {es:"dar pena",           en:"to feel sorry for / be a shame", type:"chunk", ex:"Me da pena que no puedas venir.",           hint:"pena = sorrow/pity. me da pena = I feel bad about it", level:"B1"},
  {es:"dar la vuelta",      en:"to turn around / go around",type:"chunk", ex:"Da la vuelta a la izquierda.",                   hint:"vuelta = turn/round. dar la vuelta = to turn around", level:"A2"},
  {es:"dar un paseo",       en:"to go for a walk",         type:"chunk", ex:"¿Quieres dar un paseo por el parque?",            hint:"paseo = walk/stroll. dar un paseo = to take a walk", level:"A1"},
  {es:"darse cuenta de",    en:"to realise / notice",      type:"chunk", ex:"Me di cuenta de que me había equivocado.",        hint:"cuenta = account/reckoning → darse cuenta = realise", level:"B1"},
  {es:"dar asco",           en:"to be disgusting",         type:"chunk", ex:"Este olor me da asco.",                           hint:"asco = disgust. dar asco = to disgust/gross out", level:"B1"},
  {es:"dar por sentado",    en:"to take for granted",      type:"chunk", ex:"No des por sentada su amabilidad.",               hint:"sentado = seated/settled → give for settled = take for granted", level:"B1"},
],

"Estar Expressions": [
  {es:"estar de acuerdo",   en:"to agree",                 type:"chunk", ex:"Estoy de acuerdo contigo.",                       hint:"acuerdo = agreement. estar de acuerdo = to be in agreement", level:"A2"},
  {es:"estar de vuelta",    en:"to be back",               type:"chunk", ex:"Ya estoy de vuelta — ¿qué me perdí?",             hint:"vuelta = return/round. estar de vuelta = to be back", level:"A2"},
  {es:"estar a punto de",   en:"to be about to",           type:"chunk", ex:"Estaba a punto de salir cuando llamaste.",        hint:"⭐ estar a punto de + inf = to be about to do", level:"B1"},
  {es:"estar al tanto",     en:"to be up to date / informed", type:"chunk", ex:"¿Estás al tanto de lo que pasó?",             hint:"tanto = so much → estar al tanto = be in the know", level:"B1"},
  {es:"estar harto de",     en:"to be fed up with",        type:"chunk", ex:"Estoy harto de esperar.",                         hint:"harto = full/fed up. estar harto de = be sick of", level:"B1"},
  {es:"estar en forma",     en:"to be fit / in shape",     type:"chunk", ex:"Se nota que estás en muy buena forma.",           hint:"forma = form/shape. estar en forma = to be in shape", level:"A2"},
  {es:"estar de moda",      en:"to be in fashion",         type:"chunk", ex:"Los aguacates están muy de moda ahora.",          hint:"moda = fashion. estar de moda = to be trendy", level:"A2"},
  {es:"estar de paso",      en:"to be passing through",    type:"chunk", ex:"No vivo aquí — solo estoy de paso.",              hint:"paso = step/pass. estar de paso = just passing through", level:"B1"},
  {es:"estar listo",        en:"to be ready",              type:"chunk", ex:"¿Ya estás listo? Nos vamos.",                     hint:"⚠ ser listo = be clever. estar listo = be ready", level:"A2"},
],

"Ir Expressions": [
  {es:"ir a + infinitivo",  en:"going to do (near future)", type:"chunk", ex:"Voy a estudiar esta tarde.",                    hint:"⭐ most common future in LatAm: voy/vas/va/vamos/van a + inf", level:"A1"},
  {es:"irse",               en:"to leave / go away",       type:"chunk", ex:"Me voy — hasta mañana.",                         hint:"ir = go. irse = to leave/go away (from here)", level:"A1"},
  {es:"ir de compras",      en:"to go shopping",           type:"chunk", ex:"¿Vamos de compras el sábado?",                   hint:"compras = shopping. ir de compras = go shopping", level:"A1"},
  {es:"ir de viaje",        en:"to go on a trip",          type:"chunk", ex:"Este verano voy de viaje a Colombia.",            hint:"viaje = trip. ir de viaje = go on a trip", level:"A1"},
  {es:"ir al grano",        en:"to get to the point",      type:"chunk", ex:"Vamos al grano — ¿qué quieres?",                 hint:"grano = grain/point. ir al grano = cut to the chase", level:"B1"},
  {es:"no va a ser fácil",  en:"it's not going to be easy",type:"chunk", ex:"No va a ser fácil, pero lo intentaremos.",       hint:"ir a + ser = going to be. Common structure", level:"A2"},
],

"Llevar Expressions": [
  {es:"llevar tiempo",      en:"to have been doing for (time)", type:"chunk", ex:"Llevo tres años estudiando español.",        hint:"⭐ llevar + time + gerund = have been doing for. llevo = I have been", level:"B1"},
  {es:"llevar razón",       en:"to be right (LatAm)",      type:"chunk", ex:"Llevas razón — eso no tiene sentido.",            hint:"LatAm: llevar razón (as well as tener razón) = to be right", level:"B1"},
  {es:"llevarse bien con",  en:"to get along well with",   type:"chunk", ex:"Me llevo muy bien con mis compañeros.",           hint:"llevarse bien/mal = to get along well/badly", level:"A2"},
  {es:"llevar puesto",      en:"to be wearing",            type:"chunk", ex:"Lleva puesta una camisa azul.",                   hint:"puesto = put on. llevar puesto = to be wearing", level:"A2"},
],

"Ponerse Expressions": [
  {es:"ponerse + adjetivo", en:"to become (sudden state change)", type:"chunk", ex:"Se puso muy nervioso antes del examen.",   hint:"⭐ ponerse + adj = sudden emotional/physical change: se puso rojo = went red", level:"B1"},
  {es:"ponerse de acuerdo", en:"to come to an agreement",  type:"chunk", ex:"Necesitamos ponernos de acuerdo sobre el precio.", hint:"de acuerdo = agreement. ponerse de acuerdo = agree", level:"B1"},
  {es:"poner en marcha",    en:"to start up / set in motion", type:"chunk", ex:"Hay que poner el plan en marcha.",             hint:"marcha = motion. poner en marcha = to get going", level:"B1"},
  {es:"ponerse al día",     en:"to catch up / get up to date", type:"chunk", ex:"Necesito ponerme al día con el trabajo.",     hint:"al día = up to date. ponerse al día = catch up", level:"B1"},
],

"Quedar Expressions": [
  {es:"quedar con",         en:"to arrange to meet",       type:"chunk", ex:"He quedado con Ana a las ocho.",                  hint:"⭐ quedar con = to arrange to meet someone. Very common in LatAm", level:"A2"},
  {es:"quedarse con",       en:"to keep / take",           type:"chunk", ex:"Quédate con el cambio.",                          hint:"quedarse con = to keep something for yourself", level:"A2"},
  {es:"quedar bien/mal",    en:"to suit / not suit",       type:"chunk", ex:"Ese color te queda muy bien.",                    hint:"queda bien = suits you. like gustar", level:"A2"},
  {es:"quedarse sin",       en:"to run out of",            type:"chunk", ex:"Me quedé sin dinero a mitad del viaje.",          hint:"quedarse sin = to be left without = run out", level:"B1"},
  {es:"en lo que queda de", en:"for the rest of",          type:"chunk", ex:"En lo que queda de semana termino el proyecto.",  hint:"lo que queda = what remains. en lo que queda de = for the rest of", level:"B1"},
],

};

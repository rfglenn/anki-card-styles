function pickBackground() {                                     
    var backgroundsArray = ["blackGateYushimaSeidoTokyo", "booksJimbocho", "bookstoreJimbocho", "bridgeShinjukuGyoen", "capacitorsAkihabara", "catMangaIkebukuro", "coinsGinkakujiKyoto", "craneStacksZeniariKamakura", "crowdedBridgeRikugienTokyo", "crowdedSkylineKiyomizudera", "crowdRikugienTokyo", "darumaPikachuPokecenter", "distantLanternsYasakaKyoto", "entryZeniariKamakura", "foxCeramicsInariKamakura", "geometricKiyomizuderaKyoto", "ginkakujiStairsKyoto", "gyozaIkebukuro", "lanternAsakusa", "lanternShinjukuGyoen", "lanternsYasakaKyoto", "leavesKyoto", "metallicMeijiJingu", "mossKyoto", "nightAlleyIkebukuro", "nishikiKyoto", "philosophersPathKyoto", "planarLeavesYoyogi", "redLeavesShinjukuGyoen", "sakeMeijiJingu", "signsAkihabara", "skylineKoshikawaTokyo", "stairsKiyomizudera", "stoptakingselfiesAsakusa", "sunsetEnoshima", "traditionalStreetKyoto", "triforceEngakujiKamakura", "trunkRikugienTokyo", "tsukemonoNukadokoNishikiKyoto", "wallYasakaKyoto", "woodblockAsakusa", "yellowLeavesRikugienTokyo", "yellowLeavesYoyogi"];

    //var backgroundsArray = ["picoBackground"]

    var numBackgrounds = backgroundsArray.length;            
                                                                
    //returns time in milliseconds, so to get it to the actual number i want, divide by 1000*1000
    //number should increment every ~16 minutes
    var nonRandomNumber = Math.floor(((new Date).getTime())/1000000);
    var backgroundIndex = nonRandomNumber % numBackgrounds;

    return ("_".concat(backgroundsArray[backgroundIndex], ".jpg"));
}

function setBackground() {
    var background = 'url("'+pickBackground()+'")';

    if (document.body.style.backgroundImage != background) {
        document.body.style.backgroundImage = background;
    }
}

setBackground();

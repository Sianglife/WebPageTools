function newopt(){
    a=exp()
    mol1=a[0]
    mol2=a[1]
    mol3=a[2]
    mol4=a[3]
    var s=[]
    for (i=0;i<mol1[0].length;i++){
        s.push((mol3[0][i]+'('+mol1[0][i]+')('+mol2[0][i]+')'))
    }
    return s
}
function exp(){
    var mol1 = CSVToArray('1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118',",")
    var mol2 = CSVToArray('氫,氦,鋰,鈹,硼,碳,氮,氧,氟,氖,鈉,鎂,鋁,矽,磷,硫,氯,氬,鉀,鈣,鈧,鈦,釩,鉻,錳,鐵,鈷,鎳,銅,鋅,鎵,鍺,砷,硒,溴,氪,銣,鍶,釔,鋯,鈮,鉬,鎝,釕,銠,鈀,銀,鎘,銦,錫,銻,碲,碘,氙,銫,鋇,鑭,鈰,鐠,釹,鉕,釤,銪,釓,鋱,鏑,鈥,鉺,銩,鐿,鑥,鉿,鉭,鎢,錸,鋨,銥,鉑,金,汞,鉈,鉛,鉍,釙,砹,氡,鍅,鐳,錒,釷,鏷,鈾,錼,鈽,鋂,鋦,鉳,鉲,鑀,鐨,鍆,鍩,鐒,鑪,𨧀,𨭎,𨨏,𨭆,䥑,鐽,錀,鎶,鉨,鈇,鏌,鉝,,',",")
    var mol3 = CSVToArray('H,He,Li,Be,B,C,N,O,F,Ne,Na,Mg,Al,Si,P,S,Cl,Ar,K,Ca,Sc,Ti,V,Cr,Mn,Fe,Co,Ni,Cu,Zn,Ga,Ge,As,Se,Br,Kr,Rb,Sr,Y,Zr,Nb,Mo,Tc,Ru,Rh,Pd,Ag,Cd,In,Sn,Sb,Te,I,Xe,Cs,Ba,La,Ce,Pr,Nd,Pm,Sm,Eu,Gd,Tb,Dy,Ho,Er,Tm,Yb,Lu,Hf,Ta,W,Re,Os,Ir,Pt,Au,Hg,Tl,Pb,Bi,Po,At,Rn,Fr,Ra,Ac,Th,Pa,U,Np,Pu,Am,Cm,Bk,Cf,Es,Fm,Md,No,Lr,Rf,Db,Sg,Bh,Hs,Mt,Ds,Rg,Cn,Nh,Fl,Mc,Lv,Ts,Og',",")
    var mol4 = CSVToArray('1.00794,4.002602,6.941,9.0121831,10.811,12.0107,14.0067,15.9994,18.998403163,20.1797,22.98976928,24.3050,26.9815385,28.0855,30.973761998,32.065,35.453,39.948,39.0983,40.078,44.955908,47.867,50.9415,51.9961,54.938044,55.845,58.933194,58.6934,63.546,65.38,69.723,72.64,74.921595,78.971,79.904,83.798,85.4678,87.62,88.90584,91.224,92.90637,95.95,98.9,101.07,102.90550,106.42,107.8682,112.414,114.818,118.710,121.760,127.60,126.90447,131.293,132.90545196,137.327,138.90547,140.116,140.90766,144.242,144.9,150.36,151.964,157.25,158.92535,162.500,164.93033,167.259,168.93422,173.054,174.9668,178.49,180.94788,183.84,186.207,190.23,192.217,195.084,196.966569,200.59,204.3833,207.2,208.98040,208.9824,209.9871,222.0176,223.0197,226.0245,227.0277,232.0377,231.03588,238.02891,237.0482,239.0642,243.0614,247.0704,247.0703,251.0796,252.0830,257.0591,258.0984,259.1010,262.1097,267.1218,268.1257,269.1286,274.1436,277.1519,278,281,282,285,284,289,288.2,293,294.2,294.2',",")
    var mol = [mol1,mol2,mol3,mol4]
    return mol
}
function add(){
    i=($('#status').val()).length
    //console.log(i)
    word=$('#molecule').html()+'<select class="molesel" id="'+i+'a"></select><input class="moleinp" value=1 style="width: 35px;" type=number id="'+i+'b" min=0>'
    //console.log(word)
    $('#molecule').html(word)
    $('#status').val($('#status').val()+1)
    var s=document.getElementById(i+'a')
    var a=newopt()
    for (i=0;i<a.length;i++){
        s.options.add(new Option(a[i]))
        //console.log(a[i])
    }
}

function CSVToArray( strData, strDelimiter ){
    // Check to see if the delimiter is defined. If not,
    // then default to comma.
    strDelimiter = (strDelimiter || ",");

    // Create a regular expression to parse the CSV values.
    var objPattern = new RegExp(
        (
            // Delimiters.
            "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +

            // Quoted fields.
            "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +

            // Standard fields.
            "([^\"\\" + strDelimiter + "\\r\\n]*))"
        ),
        "gi"
        );


    // Create an array to hold our data. Give the array
    // a default empty first row.
    var arrData = [[]];

    // Create an array to hold our individual pattern
    // matching groups.
    var arrMatches = null;


    // Keep looping over the regular expression matches
    // until we can no longer find a match.
    while (arrMatches = objPattern.exec( strData )){

        // Get the delimiter that was found.
        var strMatchedDelimiter = arrMatches[ 1 ];

        // Check to see if the given delimiter has a length
        // (is not the start of string) and if it matches
        // field delimiter. If id does not, then we know
        // that this delimiter is a row delimiter.
        if (
            strMatchedDelimiter.length &&
            strMatchedDelimiter !== strDelimiter
            ){

            // Since we have reached a new row of data,
            // add an empty row to our data array.
            arrData.push( [] );

        }

        var strMatchedValue;

        // Now that we have our delimiter out of the way,
        // let's check to see which kind of value we
        // captured (quoted or unquoted).
        if (arrMatches[ 2 ]){

            // We found a quoted value. When we capture
            // this value, unescape any double quotes.
            strMatchedValue = arrMatches[ 2 ].replace(
                new RegExp( "\"\"", "g" ),
                "\""
                );

        } else {

            // We found a non-quoted value.
            strMatchedValue = arrMatches[ 3 ];

        }


        // Now that we have our value string, let's add
        // it to the data array.
        arrData[ arrData.length - 1 ].push( strMatchedValue );
    }

    // Return the parsed data.
    return( arrData );
}
function output(text){
    $('#output').html(text)
}
function ongo(){
    var checkend1=0
    var AA=""
    for (i=1;i<$('#status').val().length;i++){
        var s =document.getElementById(i+'a')
        var index = s.selectedIndex
        if ($('#'+i+'b').val()==0){
            var num=0
            console.log(1)
        }else{
            var num=$('#'+i+'b').val()
            console.log(2)
        }
        var end=exp()[3][0][index]*num
        checkend1=checkend1+(end)
        if (num==1||num==""){
            num=""
            AA=AA+exp()[2][0][index]+num
            //console.log(AA,checkend2)
            console.log('a')
            
        }else if (num==0){
            AA=""
            console.log('b')
        }else{
            AA=AA+exp()[2][0][index]+num
            console.log('c')
        }
    }
    //console.log(AA)
    if (AA!=""){
        output(AA+'的分子量='+checkend1)
    }else{
        alert('輸入錯誤!請確認輸入數值是否正確!')
    }
}
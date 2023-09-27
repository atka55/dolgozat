
var tomb = [];
function Tarol()
{
    var obj = { 
    rendsz: document.getElementById("rendszam").value,
    uzema: document.getElementById("uzema").value,
    elsot: document.getElementById("elsot").checked,
    3: document.getElementById("3").checked,
    5: document.getElementById("5").checked 
    }
    tomb.push(obj);

}

function Statisztika()
{
    document.getElementById("tablazat").styledisplay = "block";
    var ben = 0;
    var diz = 0;
    var elekt = 0;
    var elsotu = 0;
    var regi = 0;
    var uj = 0;
    var arany = 0;
    var a3 = 0;
    var a5 = 0;

    for( let i = 0; i < tomb.length;i++)
    {
        if(tomb[i].uzema == "benzin") 
        {
            ben++
        }
        else if(tomb[i].uzema == "dizel") 
        {
            diz++
        }
        else
        {
            elekt++;
        }
        document.getElementById("benzinsz").innerHTML = ben;
        document.getElementById("dizelsz").innerHTML = diz;
        document.getElementById("elektsz").innerHTML = elekt;

        
        
    }
}
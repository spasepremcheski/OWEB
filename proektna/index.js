
function start(){
    var pi=document.getElementById("personalInfo");
    pi.addEventListener("click",personalInfo,false);
    var edu=document.getElementById("edu");
    edu.addEventListener("click",Education,false);
    var lang=document.getElementById("lang");
    lang.addEventListener("click",LangKnowledge,false);
    var active=document.getElementById("active");
    active.addEventListener("click",Activities,false);
}

function personalInfo(){
    var output="<input id=\"personalInfo\" type=\"button\" value=\"Personal Information\">";
    output+="<ul><li><p>Birthdate: <b>07 June 2000</b></p></li>";
    output+="<li><p>Birthplace: <b>Tetovo</b></p></li>";
    output+="<li><p>Address: <b>ul. Mitropolit Teodosij Gologanov 1000 Skopje</b></p></li>";
    output+="<li><p>E-Mail: <b>spase0706@gmail.com</b></p></li></ul>";
    document.getElementById("personal-info").innerHTML=output;
    var pi=document.getElementById("personalInfo");
    pi.addEventListener("click",personalInfoHide,false);
}

function personalInfoHide(){
    var output="<input id=\"personalInfo\" type=\"button\" value=\"Personal Information\">";
    document.getElementById("personal-info").innerHTML=output;
    var pi=document.getElementById("personalInfo");
    pi.addEventListener("click",personalInfo,false);
}

function Education(){
    var output="<input id=\"edu\" type=\"button\" value=\"Education\">";
    output+="<ul><li><pre class=\"tnrfont\">01.10.2019 - today         FEIT - UKIM</pre></li>";
    output+="<li><pre class=\"tnrfont\">01.09.2015 - 10.06.2019    SUGS Josip Broz Tito - Skopje</pre></li>";
    output+="<li><pre class=\"tnrfont\">01.09.2007 - 10.06.2015    O.U. Kosta Racin - Brvenica</pre></li></ul>";
    document.getElementById("education").innerHTML=output;
    var pi=document.getElementById("edu");
    pi.addEventListener("click",EducationHide,false);
}

function EducationHide(){
    var output="<input id=\"edu\" type=\"button\" value=\"Education\">";
    document.getElementById("education").innerHTML=output;
    var pi=document.getElementById("edu");
    pi.addEventListener("click",Education,false);
}

function LangKnowledge(){
    var output="<input id=\"lang\" type=\"button\" value=\"Language knowledge\">";
    output+="<ul><li><p>Macedonian - Native</p></li>";
    output+="<li><p>English - C1 level (written and spoken)</p></li>";
    output+="<li><p>German - C1 level (written), B2 level (spoken)</p></li></ul>";
    document.getElementById("lang-knowledge").innerHTML=output;
    var pi=document.getElementById("lang");
    pi.addEventListener("click",LangKnowledgeHide,false);
}

function LangKnowledgeHide(){
    var output="<input id=\"lang\" type=\"button\" value=\"Language knowledge\">";
    document.getElementById("lang-knowledge").innerHTML=output;
    var pi=document.getElementById("lang");
    pi.addEventListener("click",LangKnowledge,false);
}

function Activities(){
    var output="<input id=\"active\" type=\"button\" value=\"Activities\">";
    output+="<ul><li><p><q>Spektrum Service</q> - Tetovo (10.08-23.09.2019)</p></li>";
    output+="<li><p>Robomac Junior (20-22.03.2019)</p></li>";
    output+="<li><p>Microsoft Office Specialist</p></li>";
    output+="<li><p>VI place Mathematics and Physics Competition (07.03.2015)</p></li>";
    output+="<li><p>VII place Macedonian olympics in German language (28.02.2015)</p></li></ul>";
    document.getElementById("activities").innerHTML=output;
    var pi=document.getElementById("active");
    pi.addEventListener("click",ActivitiesHide,false);
}

function ActivitiesHide(){
    var output="<input id=\"active\" type=\"button\" value=\"Activities\">";
    document.getElementById("activities").innerHTML=output;
    var pi=document.getElementById("active");
    pi.addEventListener("click",Activities,false);
}

window.addEventListener("load",start,false);
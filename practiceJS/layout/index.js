let layoutStructure = {
    header: true,
    columns: ["nav","article","aside"],
    footer: true,
    column: 3,
    columnSequence: ["nav","article","aside"]
};

let Pondit = {};

Pondit.Layout = {
    header: () =>{
        let headerContainer = document.createElement("HEADER");
        headerContainer.setAttribute("style"," display:flex; align-items:center; background: yellowgreen; height: 15vh; padding: 1em;box-sizing: border-box;");
        let header = document.createTextNode("This is Header");
        
        headerContainer.appendChild(header);
        document.getElementsByTagName("body")[0].appendChild(headerContainer);
        return headerContainer;
    },
    footer: () => {
        let footerContainer = document.createElement("FOOTER");
        footerContainer.setAttribute("style","display:flex; align-items:center;background: yellowgreen; height: 15vh; padding: 1em; box-sizing: border-box");
        let footer = document.createTextNode("This is Footer");
        footerContainer.appendChild(footer);
        document.getElementsByTagName("body")[0].appendChild(footerContainer);
        return footerContainer;
    },
    nav: (position, width = 0) => {
        let navContainer = document.createElement("NAV");
        navContainer.setAttribute(`style`,`flex: ${width} 0 20vw; background: green; order: ${position}; padding: 1em; box-sizing: border-box;`);
        let nav = document.createTextNode("Nav");
        navContainer.appendChild(nav);

        return navContainer;
    },
    article: (position, width= 1) => {
        let articleContainer = document.createElement("ARTICLE");
        articleContainer.setAttribute(`style`,`flex: ${width} 0 20vw; order:${position}; background-color: #ddd; padding: 1em; box-sizing: border-box;`);
        let article = document.createTextNode("Article");
        articleContainer.appendChild(article);

        return articleContainer;
    },
    aside:(position, width = 0)=>{
        let asideContainer = document.createElement("ASIDE");
        asideContainer.setAttribute(`style`,`flex:${width} 0 20vw; background:#7e7e7e; order:${position}; padding: 1em; box-sizing: border-box;`);
        let aside = document.createTextNode("Aside");
        asideContainer.appendChild(aside);

        return asideContainer;
    },
    mainContainer: ()=>{
        let mainContainer = document.createElement("DIV");
        mainContainer.setAttribute("id","main");
        mainContainer.setAttribute("style","display:flex; flex: 1; box-sizing: border-box;");

        // let body = document.getElementsByTagName("body");
        // body[0].setAttribute("style","display:flex; min-height: 100vh; flex-direction:column; margin: 0; box-sizing: border-box;");
        // body[0].appendChild(mainContainer);

        document.getElementsByTagName("body")[0].setAttribute("style","display:flex; min-height: 100vh; flex-direction:column; margin: 0; box-sizing: border-box;");
        document.getElementsByTagName("body")[0].appendChild(mainContainer);
    },

    build: (layoutTemplate) => {
        // let body = document.getElementsByTagName("body");

        if(layoutTemplate.header){
            Pondit.Layout.header();
        }
        Pondit.Layout.mainContainer();

        layoutTemplate.columns.forEach((column) =>{
            layoutTemplate.columnSequence.forEach((element, index)=>{
                if(column == "nav" && element == "nav"){
                    if(layoutTemplate.column<3){
                        document.getElementById("main").appendChild(Pondit.Layout.nav(index, 1));
                    }else{
                        document.getElementById("main").appendChild(Pondit.Layout.nav(index));
                    }
                }else if(column == "article" && element == "article"){
                    document.getElementById("main").appendChild(Pondit.Layout.article(index));
                }else if(column == "aside" && element == "aside"){
                    if(layoutTemplate.column <3){
                        document.getElementById("main").appendChild(Pondit.Layout.aside(index,1));
                    }else{
                        document.getElementById("main").appendChild(Pondit.Layout.aside(index));
                    }
                }
            });
        });

        if(layoutTemplate.footer){
            Pondit.Layout.footer();
        }
    },
    html: ()=>{
        let generatedHTML = "";
        document.querySelectorAll("body > :not(script)").forEach((value)=>{
            generatedHTML += value.outerHTML;
        });
        return generatedHTML;
    },
};
Pondit.Layout.build(layoutStructure);
console.log(Pondit.Layout.html());
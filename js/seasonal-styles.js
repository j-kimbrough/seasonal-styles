$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element
        //alert(season);
        switch(season){
            case 'Default':
             $("#wear").attr('src','images/300x400.png');
             $("#logo").attr('src','images/four-seasons.gif');
             $("header > h3").css('color', 'black');
             $("html").css('backgroundColor', 'grey');
             $('h3#text').text(' Outfitter for All Seasons!');
            break;

            case 'Winter':
                $("#wear").attr('src','images/winter-wear.jpg');
                $("#logo").attr('src','images/winter.gif');
                $("header > h3").css('color', '#005393');
                $("html").css('backgroundColor', '#005393');
                $('h3#text').text(' Clothes to keep you warm all winter!');
            break;

            case 'Spring': 
            $("#wear").attr('src','images/spring-wear.jpg');
            $("#logo").attr('src','images/spring.gif');
            $("header > h3").css('color', '#2B7129');
            $("html").css('backgroundColor', '#2B7129');
            $('h3#text').text(' Clothes for light breeze in spring!');
            break;

            case 'Summer':
                $("#wear").attr('src','images/summer-wear.jpg');
                $("#logo").attr('src','images/summer.gif');
                $("header > h3").css('color', '#EBA52B');
                $("html").css('backgroundColor', '#EBA52B');
                $('h3#text').text(' Clothes to keep you cool in the summer!');
            break;

            case 'Fall':
                $("#wear").attr('src','images/fall-wear.jpg');
                $("#logo").attr('src','images/fall.gif');
                $("header > h3").css('color', '#A81124');
                $("html").css('backgroundColor', '#A81124');
                $('h3#text').text(' Clothes that are just warm enough for the fall!');
            break;

        }
    });
});
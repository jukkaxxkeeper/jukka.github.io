document.title = "EDP Ekko Group";

let first_button = document.querySelector(".button1");
let first_display_holder = document.querySelector(".subject_holder");
let first_display = document.querySelector(".display1");
let course_holder = document.querySelector(".course_holder");
let course_text_holder = document.querySelector(".course_text_holder");
let course_text = document.querySelector(".course_text");
let color_holder = document.querySelector(".color_holder");
let second_button = document.querySelector(".button2");
let third_button = document.querySelector(".button3");
let righthand = document.querySelector(".righthand");
let righthand_p = document.querySelector(".righthand_p");

const ccs_color = getComputedStyle(document.documentElement).getPropertyValue('--ccs_color');
const cba_color = getComputedStyle(document.documentElement).getPropertyValue('--cba_color');
const ccje_color = getComputedStyle(document.documentElement).getPropertyValue('--ccje_color');
const cte_color = getComputedStyle(document.documentElement).getPropertyValue('--cte_color');
const mid_white = getComputedStyle(document.documentElement).getPropertyValue('--palette-mid-white');

// first button first range..

first_button.addEventListener("click", changeText);

// decor

let triangle_bg = document.querySelector(".triangle_bg");
let cylinder_bg = document.querySelector(".cylinder_bg");
let spiral_bg = document.querySelector(".spiral");

let cube_bg = document.querySelector(".cube_bg");
let bicube_bg = document.querySelector(".bicube_bg");
let donut_bg = document.querySelector(".donut_bg");
let tetris_bg = document.querySelector(".tetris_bg");

let glass_mesh_bg = document.querySelector(".glass_mesh");
let glass_ring_bg = document.querySelector(".glass_ring");
let glass_torus_knot_bg = document.querySelector(".glass_torus_knot");
let glass_lense_bg = document.querySelector(".glass_lense");
let glass_curl_bg = document.querySelector(".glass_curl");
let glass_plug_bg = document.querySelector(".glass_plug");

function changeText(){
    if (first_display.innerHTML == "Subject: Event Driven Programming"){
        first_display_holder.style.backgroundColor = "white";
        first_display.style.color = "black";
        first_display.innerHTML = "Professor: Mr. Amado Diao";
    }
    else if (first_display.innerHTML == "Professor: Mr. Amado Diao"){
        first_display_holder.style.backgroundColor = "black";
        first_display.style.color = "white";
        first_display.innerHTML = "Subject: Event Driven Programming";
    }
}

// second button code range..

const course_name = ["CCS", "CBA", "CCJE", "CTE"];
const course_color = [ccs_color, cba_color, ccje_color, cte_color];
const identification = ["Student", "Faculty", "Staff"];

let click_counter = 0;

const course_text_content = course_text.innerHTML;

course_text.innerHTML = course_text_content + course_name[0];
color_holder.style.backgroundColor = course_color[0];

second_button.addEventListener("click", changeCourse);

function changeCourse(){

    if (click_counter == 1){
        course_holder.style.backgroundColor = "white";
        course_text_holder.style.backgroundColor = "white";
        course_text.style.color = "black";
    } else{
        course_text_holder.style.backgroundColor = "black";
        course_holder.style.backgroundColor = "black";
        course_text.style.color = "white";
    }

    if (click_counter != 3){
        click_counter++;
        course_text.innerHTML = course_text_content + course_name[click_counter];
        color_holder.style.backgroundColor = course_color[click_counter];
    } else{
        click_counter = 0;
        course_text.innerHTML = course_text_content + course_name[click_counter];
        color_holder.style.backgroundColor = course_color[click_counter];
    }
}

// third button code range..

const member = ["Student", "Faculty", "Staff"]
const member_color = ["white", "blue", "green"]

righthand_p.innerHTML = member[0];

let member_click_counter = 0;

third_button.addEventListener("click", changeFaculty);



function changeFaculty(){

    if (member_click_counter <= 1){
        member_click_counter++;
    } else{
        member_click_counter = 0;   
    }

    console.log(member_click_counter == 0);
    if (member_click_counter == 0){
        righthand_p.style.color = "black";
    } else {righthand_p.style.color = "white";}

    righthand.style.backgroundColor = member_color[member_click_counter];
    righthand_p.innerHTML = member[member_click_counter];
}

// member button code range..

member_button = document.querySelector('.mem_con_button');
member_container = document.querySelector('.member_name_container');

let isClicked = false;

member_button.addEventListener("mouseenter", mouseHovered);
member_button.addEventListener("mouseleave", mouseUnhovered);
member_button.addEventListener("click", buttonClicked);

function buttonClicked(){
    if (!isClicked){
        member_container.style.backgroundColor = "white";
        isClicked = true
    } else{
        member_container.style.backgroundColor = "rgba(0, 0, 0, 0)";
        isClicked = false
    }
}

function mouseHovered(){
    member_container.style.opacity = 1;

    if (window.matchMedia("(max-width: 1280px)").matches){
        return console.log("no animation");
    }

    // decor movements
    triangle_bg.style.left = "-30rem";
    triangle_bg.style.bottom = "-25rem";
    cylinder_bg.style.left = "0rem";
    cylinder_bg.style.bottom = "-4rem";
    spiral_bg.style.left = "4rem";
    spiral_bg.style.bottom = "-24rem";
    cube_bg.style.bottom = "-80rem";
    cube_bg.style.right = "-105rem";
    bicube_bg.style.bottom = "-10rem";
    bicube_bg.style.right = "-8rem";
    bicube_bg.style.filter = "blur(1px)";
    donut_bg.style.bottom = "-33rem";
    donut_bg.style.right = "10rem";
    tetris_bg.style.right = "-12rem";
    tetris_bg.style.bottom = "14rem";
    glass_mesh_bg.style.left = "-10rem";
    glass_mesh_bg.style.top = "-9rem";
    glass_ring_bg.style.left = "15rem";
    glass_ring_bg.style.top = "-5rem";
    glass_torus_knot_bg.style.top = "-10rem";
    glass_torus_knot_bg.style.left = "33rem";
    glass_lense_bg.style.right = "25rem";
    glass_lense_bg.style.top = "-12rem";
    glass_curl_bg.style.right = "0rem";
    glass_curl_bg.style.top = "-5rem";
    glass_plug_bg.style.top = "5rem";
    glass_plug_bg.style.right = "-12rem";
}

function mouseUnhovered(){
    member_container.style.opacity = 0;

    if (window.matchMedia("(max-width: 1280px)").matches){
        return console.log("no animation");
    }

    // decor movements
    triangle_bg.style.left = "-10rem";
    triangle_bg.style.bottom = "-5rem";
    cylinder_bg.style.left = "7rem";
    cylinder_bg.style.bottom = "9rem";
    spiral_bg.style.left = "14rem";
    spiral_bg.style.bottom = "-10rem";
    cube_bg.style.bottom = "-65rem";
    cube_bg.style.right = "-85rem";
    bicube_bg.style.bottom = "2rem";
    bicube_bg.style.right = "7rem";
    bicube_bg.style.filter = "blur(0px)";
    donut_bg.style.bottom = "-23rem";
    donut_bg.style.right = "20rem";
    tetris_bg.style.right = "-3rem";
    tetris_bg.style.bottom = "20rem";
    glass_mesh_bg.style.left = "-5rem";
    glass_mesh_bg.style.top = "-3rem";
    glass_ring_bg.style.left = "20rem";
    glass_ring_bg.style.top = "1rem";
    glass_torus_knot_bg.style.top = "-7rem";
    glass_torus_knot_bg.style.left = "35rem";
    glass_lense_bg.style.right = "30rem";
    glass_lense_bg.style.top = "-9rem";
    glass_curl_bg.style.right = "8rem";
    glass_curl_bg.style.top = "0rem";
    glass_plug_bg.style.top = "8rem";
    glass_plug_bg.style.right = "-9rem";
}

function setNewPosition(element, position, difference){
    let int_in_px = parseInt(window.getComputedStyle(element).getPropertyValue(position));
    let int_in_rem = int_in_px / 16;
    int_in_rem = int_in_rem - difference;
    return `${int_in_rem}rem`;
}

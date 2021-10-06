<template>
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
body {
    padding-top: 1em;
    background: #312323;
}

.card-header {
    color: #ffffff;
    background: #000000;
    border-bottom: 1px solid rgba(0,0,0,.125); /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  #9c9488 0%,#70695e 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#9c9488', endColorstr='#70695e',GradientType=0 ); /* IE6-9 */
}

.search-form {
    padding: 2em 2em 3em 2em;
    text-align: center;
    display: block;
}

.search-form h2 {
    font-size: 14px;
    text-transform: uppercase;
    color: #66645f;
    margin-bottom: 1.5em;
}

.search-form .input-group {
    width: 55%;
    margin: auto;
}

.search-form .input-group input {
    padding: 6px 12px;
    color: #b6b6b6;
    font-size: 13px;
    letter-spacing: -0.02em;
    outline: none;
    background: -moz-linear-gradient(top, #ffffff, #efefef);
    border-radius: 3px;
    border-bottom-right-radius: 3px !important;
    border-top-right-radius: 3px !important;
    border: 1px solid #d7d7d7;
    margin-right: 12px;
}

.search-form .input-group button {
    color: #ffffff;
    text-transform: uppercase;
    font-size: 13px;    
    background: #f17c5b; /* Old browsers */ /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  #f17c5b 0%,#d95d3b 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f17c5b', endColorstr='#d95d3b',GradientType=0 ); /* IE6-9 */
    border-radius: 5px;
    border-bottom-left-radius: 5px !important;
    border-top-left-radius: 5px !important;
    border: none;
    padding: 10px 3em;
}

.letter-control {
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    padding: 1em 0;
}
.letter-control ul {
    margin: 0;
    padding: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
}
.letter-control ul li {
    list-style: none;
    display: inline-block;
    text-align: center; 
    width: 40px;
}
.letter-control ul li a {
    color:#66645f;
    text-decoration: none;
    transition: all .2s ease-in;    
}
.letter-control ul li a:hover {
    color: #f17c5b !important;
    cursor: pointer; cursor: hand;
}


.card-block thead {
    text-align: center;
    background: #8d8d8d; 
    background: linear-gradient(to bottom,  #464646 0%,#aaaaaa 100%); 
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fdfbee', endColorstr='#f3f1d8',GradientType=0 ); 
}
.table-bordered thead td, .table-bordered thead th {
    text-align: center;
    color: #ffffff;   
}
.card-block .table-bordered {
    border: 1px solid #dedede;
    text-align: center;
    font-size: 14px; 
}
.card-block a {
  margin-right: 10px;
}
.card-block a.btn-orange {
    color: #ffffff;
    text-decoration: none;
    padding: 5px 10px;
    background: #f17c5b;
    background: linear-gradient(to bottom, #f17c5b 0%,#d95d3b 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f17c5b', endColorstr='#d95d3b',GradientType=0 );
    border-radius: 5px;
}

.card-block a.btn-gray {
    color: #ffffff;
    text-decoration: none;
    padding: 5px 10px;
    cursor: pointer; cursor: hand;
    background: #abaea4; 
    background: linear-gradient(to bottom,  #abaea4 0%,#9a9d91 100%); 
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#abaea4', endColorstr='#9a9d91',GradientType=0 ); 
    border-radius: 5px;
}

.edit-view h2 {
    font-size: 14px;
    text-transform: uppercase;
    color: #66645f;
    margin-bottom: 1.5em;
}

.edit-view .form-control {
    padding: 6px 12px;
    color: #b6b6b6;
    font-size: 20px;
    letter-spacing: -0.02em;
    outline: none;
    background: -moz-linear-gradient(top, #ffffff, #efefef);
    border-radius: 3px;
    border-bottom-right-radius: 3px !important;
    border-top-right-radius: 3px !important;
    border: 1px solid #d7d7d7;
    margin-right: 12px;
}


.edit-view label {
    color: #616163;
    font-size: 12px;
    text-transform: uppercase;    
}

button.btn-orange {
    color: #ffffff;
    text-transform: uppercase;  
    border: none;  
    background: #f17c5b;
    background: linear-gradient(to bottom, #f17c5b 0%,#d95d3b 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f17c5b', endColorstr='#d95d3b',GradientType=0 );
    border-radius: 5px;
}

button.btn-gray {
    color: #ffffff;
    text-transform: uppercase;
    border: none;
    background: #abaea4; 
    background: linear-gradient(to bottom,  #abaea4 0%,#9a9d91 100%); 
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#abaea4', endColorstr='#9a9d91',GradientType=0 ); 
    border-radius: 5px;
}

.detail-view .card-block .table-bordered {
    text-align: left;
}
.detail-view .table-bordered thead th {
    text-align: left;
}
.detail-view h2 {
    font-size: 14px;
    text-transform: uppercase;
    color: #66645f;
    margin-bottom: 1.5em;
}
.form-control::-webkit-input-placeholder { color: #b6b6b6; }  
.form-control:-moz-placeholder { color: #b6b6b6; }  
.form-control::-moz-placeholder { color: #b6b6b6; }  
.form-control:-ms-input-placeholder { color: #b6b6b6; }  
.form-control::-ms-input-placeholder { color: #b6b6b6; } 




.control-button a.btn-gray {
    text-transform: uppercase;
    color: #ffffff;
    text-decoration: none;
    padding: .5rem 1rem;
    background: #abaea4;
    background: linear-gradient(to bottom, #abaea4 0%,#9a9d91 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#abaea4', endColorstr='#9a9d91',GradientType=0 );
    border-radius: 5px;
}

.btn-out {
    text-transform: uppercase;
    color: #ffffff;
    text-decoration: none;
    padding: .5rem 1rem;
    border-radius: 5px;  
    margin:0;
    display: block;
    font-size: 10px;
    transition: background-color .2s ease-in;      
    background: #f17c5b;
    background: linear-gradient(to bottom, #f17c5b 0%,#d95d3b 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f17c5b', endColorstr='#d95d3b',GradientType=0 );    
}
.btn-out:hover {
    color: #ffffff !important;
    text-decoration: none;
    background: #abaea4;
    background: linear-gradient(to bottom, #abaea4 0%,#9a9d91 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#abaea4', endColorstr='#9a9d91',GradientType=0 );    
}

.search-form .input-group button:hover {
     color: #ffffff !important;
    text-decoration: none;
    background: #abaea4;
    background: linear-gradient(to bottom, #abaea4 0%,#9a9d91 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#abaea4', endColorstr='#9a9d91',GradientType=0 );   
}

.card-block a.btn-orange:hover {
    color: #ffffff !important;
    text-decoration: none;
    background: #abaea4;
    background: linear-gradient(to bottom, #abaea4 0%,#9a9d91 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#abaea4', endColorstr='#9a9d91',GradientType=0 );     
}

.card-block a.btn-gray:hover {
    color: #ffffff !important;
    text-decoration: none;
    background: #f17c5b;
    background: linear-gradient(to bottom, #f17c5b 0%,#d95d3b 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f17c5b', endColorstr='#d95d3b',GradientType=0 );   
}

.card-header h2 {
    color: #ffffff;
    font-size: 18px;
    text-transform: none !important;
    line-height: 33px;
    margin: 0;
    padding: 0; 
}
</style>

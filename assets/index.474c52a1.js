import{j as l,a,l as h,y as f,S as u}from"./vendor.74263c72.js";const m=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function d(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=d(e);fetch(e.href,r)}};m();const t=l,c=a,p=()=>{const[s,i]=h([]),d=async()=>{const r=(await(await fetch("https://api.covid19india.org/data.json",{mode:"no-cors"})).json()).statewise.filter(o=>o.active!=0);i(r)};return f(()=>{d()},[]),c("main",{children:[t("h1",{children:"Covid Tracker Live"}),c("table",{children:[t("thead",{children:c("tr",{children:[t("th",{children:"Sr"}),t("th",{children:"State"}),t("th",{children:"Active"}),t("th",{children:"Confirm"}),t("th",{children:"Deaths"}),t("th",{children:"Recovered"})]})}),t("tbody",{children:s.map((n,e)=>c("tr",{children:[t("td",{children:e++}),t("td",{children:n.state}),t("td",{children:n.active}),t("td",{children:n.confirmed}),t("td",{children:n.deaths}),t("td",{children:n.recovered})]},e))})]})]})};u(t(p,{}),document.getElementById("app"));

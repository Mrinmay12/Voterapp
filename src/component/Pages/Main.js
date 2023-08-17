import React,{useState,useEffect} from 'react'
import "./Main.css"
import LoveIcon from "../../Image/Love_Heart.png"
import BlackHeart from "../../Image/heart-thin.svg"
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage} from '@fortawesome/free-solid-svg-icons';
import apiUrl from "../../ApiAxios"
import axios from "axios"
import { useNavigate} from "react-router-dom";
import CardLoaderSkleton from "../Skeleton/CardLoaderSkeleton"
import Loder from "../LoderComponent/Loder"
import { throttle } from 'lodash';
import CardView from './CommentPage/TowCard.js/CardView';
import Card from "../CardView/Card"
export default function Main() {

  return (
   <div>
    <Card/>
   </div>
  )
}

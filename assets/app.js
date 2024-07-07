/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.css';
import alienGreeting from "./lib/alien-greeting.js";
import JSConfetti from 'js-confetti'

// day 2
console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

// day 3
alienGreeting('We will ANALyze YOU!', true);

// day 4
const jsConfetti = new JSConfetti()
jsConfetti.addConfetti()

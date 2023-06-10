import anime from 'animejs';

export default function animateCardHit(playerCard, enemyCard) {
  const playerCardPosition = playerCard.getBoundingClientRect();
  const enemyCardPosition = enemyCard.getBoundingClientRect();

  const timeline = anime.timeline({
    easing: "cubicBezier(0.065, 0.040, 1.000, -0.115)",
    duration: 200,
  });

  timeline.add({
    targets: playerCard,
    translateX: enemyCardPosition.left - playerCardPosition.left,
    translateY: enemyCardPosition.top - playerCardPosition.top,
  });

  timeline.add({
    targets: playerCard,
    translateX: 0,
    translateY: 0,
    delay: 225,
  });
}

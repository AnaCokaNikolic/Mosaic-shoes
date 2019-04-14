import ScrollMagic from 'scrollmagic';
import { CountUp } from 'countup.js';

const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({triggerElement: `#sendButton`})
                .addTo(controller)
                .on(`enter leave`, () => {
                    const countDataFollowersFB = 5234;
                    const countDataLikesFB = 5432;
                    const countDataFollowersInst = 4356;

                    const countUp1 = new CountUp(`followersFB`, countDataFollowersFB);
                    if (!countUp1.error) {
                      countUp1.start();
                    } else {
                      console.error(countUp1.error);
                    }

                    const countUp2 = new CountUp(`likesFB`, countDataLikesFB);
                    if (!countUp2.error) {
                      countUp2.start();
                    } else {
                      console.error(countUp2.error);
                    }

                    const countUp3 = new CountUp(`followersInst`, countDataFollowersInst);
                    if (!countUp3.error) {
                      countUp3.start();
                    } else {
                      console.error(countUp3.error);
                    }
                });

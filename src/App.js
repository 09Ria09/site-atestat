import NavBar from "./js/NavBar";
import React from "react";
import Screen from "./js/Screen";
import { Parallax, Background } from "react-parallax";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <div id={1} style={{scrollSnapAlign:"start"}}>
                <Parallax className={"Screen"}
                          bgImage={'1.jpg'}
                          bgImageStyle={{height:"100vh", minWidth:"100%", width:"auto"}}
                          strength={200}
                          renderLayer={(percentage) => (<h1 className={"animate__animated animate__jackInTheBox"} style={{animationDelay:"0.3s",position:"relative", width:"100%", textAlign:"center", fontSize:"max(50px,6vw)", color:"white", textShadow:"0 0 2vh #000"}}>Jean-Michel Basquiat</h1>)}
                />
            </div>
                <Screen title={'Who Was Jean-Michel Basquiat?'} bg={'11'} pic={'32'}>
                        Jean-Michel Basquiat was a Neo-Expressionist painter in the 1980s. He is best known for his primitive style and his collaboration with pop artist Andy Warhol.
                        <br/>Jean-Michel Basquiat first attracted attention for his graffiti under the name "SAMO" in New York City. He sold sweatshirts and postcards featuring his artwork on the streets before his painting career took off. He collaborated with Andy Warhol in the mid-1980s, which resulted in a show of their work. Basquiat died on August 12, 1988, in New York City.
                </Screen>
                <Screen title={'Early Life'} bg={'2'} pic={'23'}>
                        Basquiat was born in Brooklyn, New York, on December 22, 1960. With a Haitian-American father and a Puerto Rican mother, Basquiat's diverse cultural heritage was one of his many sources of inspiration.
                        <br/>
                        A self-taught artist, Basquiat began drawing at an early age on sheets of paper his father, an accountant, brought home from the office. As he delved deeper into his creative side, his mother strongly encouraged him to pursue his artistic talents.
                        <br/>
                        Basquiat first attracted attention for his graffiti in New York City in the late 1970s, under the name "SAMO." Working with a close friend, he tagged subway trains and Manhattan buildings with cryptic aphorisms.
                        <br/>
                        In 1977 Basquiat quit high school a year before he was slated to graduate. To make ends meet, he sold sweatshirts and postcards featuring his artwork on the streets of his native New York.
                </Screen>
                <Screen title={'Crown Motif'} bg={'3'} pic={'97'}>
                        In his earlier works, Basquiat was known for using a crown motif, which was his way of celebrating Black people as majestic royalty or deeming them as saints.
                        <br/>
                        Describing the crown itself in further detail, artist Francesco Clemente posited: "Jean-Michel’s crown has three peaks, for his three royal lineages: the poet, the musician, the great boxing champion. Jean measured his skill against all he deemed strong, without prejudice as to their taste or age."
                </Screen>
                <Screen title={'Paintings'} bg={'9'} pic={'65mm'}>
                        Three years of struggle gave way to fame in 1980 when Basquiat's work was featured in a group show. His work and style received critical acclaim for the fusion of words, symbols, stick figures, and animals. Soon, his paintings came to be adored by an art-loving public that had no problem paying as much as $50,000 for a Basquiat original.
                        <br/>
                        His rise coincided with the emergence of a new art movement, Neo-Expressionism, ushering in a wave of new, young and experimental artists that included Julian Schnabel and Susan Rothenberg.
                        <br/>
                        In 2017, a Japanese billionaire broke a record when he bought Basquiat's “Untitled,” a 1982 painting of a skull, for $110.5 million at a Sotheby’s auction.
                </Screen>
                <Screen title={'Basquiat and Warhol'} bg={'5'} pic={'wa'}>
                        In the mid-1980s, Basquiat collaborated with famed pop artist Warhol, which resulted in a show of their work that featured a series of corporate logos and cartoon characters.
                        <br/>
                        On his own, Basquiat continued to exhibit around the country and the world. In 1986, he traveled to Africa for a show in Abidjan, Ivory Coast. That same year, the 25-year-old exhibited nearly 60 paintings at the Kestner-Gesellschaft Gallery in Hanover, Germany — becoming the youngest artist to ever showcase his work there.
                </Screen>
                <Screen title={'Personal Problems'} bg={'35'} pic={'1'}>
                        As his popularity soared, so did Basquiat's personal problems. By the mid-1980s, friends became increasingly concerned by his excessive drug use. He became paranoid and isolated himself from the world around him for long stretches. Desperate to kick a heroin addiction, he left New York for Hawaii in 1988, returning a few months later and claiming to be sober.
                </Screen>
            <Screen title={'Death'} bg={'6'} pic={'3'}>
                    Sadly, he wasn't. Basquiat died of a drug overdose on August 12, 1988, in New York City. He was 27 years old. Although his art career was brief, Basquiat has been credited with bringing the African American and Latino experience into the elite art world.
                    <br/>
                    After his death, the artist was back in the spotlight in May 2017 when a Japanese billionaire bought “Untitled,” a 1982 painting of a skull, for $110.5 million at a Sotheby’s auction. The sale set a record for the highest price for a work by an American artist and for an artwork created after 1980. It was also the highest price for a painting by Basquiat and by a Black artist.
            </Screen>
        </div>
    );
}

export default App;

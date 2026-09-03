const SUPABASE_URL = "https://gaadodnnjiyqleblphwz.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_kzQSa42AKqAWPilwk_9GPw_SDzNHPB5";

const db = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// CATÁLOGO MAESTRO COMPLETO DE ESCUDOS
const BASE_CLUBES = [
  { "name": "2 DE MAYO", "league": "Paraguay", "url": "https://lh3.googleusercontent.com/d/1-2zSeKuqiObLUKa-RsmSAhx1hmjajUAs" },
  { "name": "ACADEMIA ANZOÁTEGUI", "league": "Venezuela", "url": "https://lh3.googleusercontent.com/d/1FH2E6brLsvqGs8Q5jGtqH9I3YqzGdZIc" },
  { "name": "ACADEMIA PUERTO CABELLO", "league": "Venezuela", "url": "https://lh3.googleusercontent.com/d/1LO_rnsJmwt24UIvx0Bcx5D_YUsB7aMe9" },
  { "name": "AGILAS DORADAS", "league": "Colombia", "url": "https://lh3.googleusercontent.com/d/1yQKWm6sdLttK2-Eu78OIiMCgTg_VlsFK" },
  { "name": "AJAX", "league": "Holanda", "url": "https://lh3.googleusercontent.com/d/1kdI9HXIk94aZebx9AHxpUkZaSarZMENW" },
  { "name": "AL AHLY", "league": "Resto del mundo", "url": "https://lh3.googleusercontent.com/d/1epZjIxhBHyKbast24mrLa8FIxVj2uVv0" },
  { "name": "AL AIN", "league": "Resto del mundo", "url": "https://lh3.googleusercontent.com/d/16MGBYSQYRPVXqAHdK2XFWeZ1Vz0Wk2LG" },
  { "name": "AL HILAL", "league": "Resto del mundo", "url": "https://lh3.googleusercontent.com/d/17TUuUR7PS8uNsUopJ0wUX63objfb9jDz" },
  { "name": "ALAVÉS", "league": "España", "url": "https://lh3.googleusercontent.com/d/1dRuyxoNOHsmXd_Xm_dkI8TXEuMdnC-yP" },
  { "name": "ALBION", "league": "Uruguay", "url": "https://lh3.googleusercontent.com/d/1kRtgxRrEgVMUu4jEZIdTiDWu7GSvidr6" },
  { "name": "ALDOSIVI", "league": "Argentina", "url": "https://lh3.googleusercontent.com/d/1iVxOR1Td6TLChh-ICg7SXvwW8HgI8NLg" },
  { "name": "ALEMANIA", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/1W7WEVqsdtTXMLByp70gUrEzyEtpv2FgP" },
  { "name": "ALIANZA ATLÉTICO", "league": "Perú", "url": "https://lh3.googleusercontent.com/d/19hDhPCGHQaOXyUM77dIKO1cmq8fILXvv" },
  { "name": "ALIANZA FC", "league": "Colombia", "url": "https://lh3.googleusercontent.com/d/1Dk2hlfGv1pj_LE9YUvfVV1KEkOxzjJAU" },
  { "name": "ALIANZA LIMA", "league": "Perú", "url": "https://lh3.googleusercontent.com/d/1B5lsTAkUoZtan5t5kW_OMy-uaEAMU-mr" },
  { "name": "ALIANZA UNIVERSITARIO", "league": "Perú", "url": "https://lh3.googleusercontent.com/d/1ImWAPxUG3wQefLUMpUAL4kQG9petZJBD" },
  { "name": "ALWAYS READY", "league": "Bolivia", "url": "https://lh3.googleusercontent.com/d/1w9VflfeyOcdWwbI37vKrHGPWoKYlzgd0" },
  { "name": "AMÉRICA", "league": "México", "url": "https://lh3.googleusercontent.com/d/1EMMCIUgQzDnmu9A650cOU8Z1FkGVcZZk" },
  { "name": "AMÉRICA DE CALI", "league": "Colombia", "url": "https://lh3.googleusercontent.com/d/1rWsKn5SXVJt4lflvrgFzawySbOk7Iek6" },
  { "name": "ANGERS", "league": "Francia", "url": "https://lh3.googleusercontent.com/d/1F821w-uuyhRRzWcAHK7RJmpUc2pwnoez" },
  { "name": "ARABIA SAUDITA", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/1S4VoSlHKR-q_ygATiB_1eRZKnOfIHFJh" },
  { "name": "ARGELIA", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/13y-6o06iJC4Ckfahd3w8YBiXCMFw3oZs" },
  { "name": "ARGENTINA", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/1pPS2kbA5zpT1r0OFSjkuQ8aOc17Mn54w" },
  { "name": "Argentinos Jrs", "league": "Argentina", "url": "https://lh3.googleusercontent.com/d/16i2V5CPCKLDo7LQgMApU3g9UA0OlOcz_" },
  { "name": "ARSENAL", "league": "Inglaterra", "url": "https://lh3.googleusercontent.com/d/1Cd_n4o2fGaNbXwDgwLaHmKyzH5EAXcy2" },
  { "name": "ASOCIACIÓN DEPORTIVA TARMA", "league": "Perú", "url": "https://lh3.googleusercontent.com/d/14iGjwlCzNY6iq0CT83pnclPWLK2lbE9I" },
  { "name": "ASTON VILLA", "league": "Inglaterra", "url": "https://lh3.googleusercontent.com/d/12MbS6aQfSo7n-sOQ53PxUu9Idme6Erbu" },
  { "name": "ATALANTA", "league": "Italia", "url": "https://lh3.googleusercontent.com/d/1XXDt9g6zflly6ykiS2u1ksg2ALfTiiR4" },
  { "name": "ATHLETIC BILBAO", "league": "España", "url": "https://lh3.googleusercontent.com/d/1BD-j9rdC0uLG5-LMPFDgp29wSZ5bLxYr" },
  { "name": "ATHLETICO PARANAENSE", "league": "Brasil", "url": "https://lh3.googleusercontent.com/d/1606yB6oelJ34LMMiXxWz_tJCNavdnPyj" },
  { "name": "ATLANTA UNITED", "league": "MLS", "url": "https://lh3.googleusercontent.com/d/1nmzfYZZMmO-PGjR8k7g-QBeyrE8jjVrG" },
  { "name": "ATLAS", "league": "México", "url": "https://lh3.googleusercontent.com/d/1yCVrm3-QumTJKsROQ6yOOJjXBQw71QA7" },
  { "name": "ATLÉTICO GOIANENSE", "league": "Brasil", "url": "https://lh3.googleusercontent.com/d/1HeMPT-wzuB3UAgwLM33UMBT5sMg4gh4K" },
  { "name": "ATLÉTICO GRAU", "league": "Perú", "url": "https://lh3.googleusercontent.com/d/1wekJux7qG1FU0MmTxOQfE57qEFoJ6qV9" },
  { "name": "Atlético Madrid", "league": "España", "url": "https://lh3.googleusercontent.com/d/1hvxg2iUwVCIssGMjXqEvOK7PrJDHVJvE" },
  { "name": "Atlético Mineiro", "league": "Brasil", "url": "https://lh3.googleusercontent.com/d/1i6wOdqgO4X0SugcLtTF2g61u8-DsyxX5" },
  { "name": "Atlético Nacional", "league": "Colombia", "url": "https://lh3.googleusercontent.com/d/1KW_mjNJjPXWm55zP_MtV6-DJk48IYdIq" },
  { "name": "ATLÉTICO SAN LUIS", "league": "México", "url": "https://lh3.googleusercontent.com/d/1gcpSgdZld-JzbekIqlEdEriyLetOzUHZ" },
  { "name": "ATLÉTICO TUCUMÁN", "league": "Argentina", "url": "https://lh3.googleusercontent.com/d/1BM57mFr-cqUuPe4fLe_EHG02Fu2rcBm3" },
  { "name": "AUCAS", "league": "Ecuador", "url": "https://lh3.googleusercontent.com/d/1huEdKfjoujJdjIoGcYHoeJeNwqTRayCY" },
  { "name": "AUCKLAND CITY", "league": "Resto del mundo", "url": "https://lh3.googleusercontent.com/d/1tO9cJ7x8sGetXNQhJsyuG1J2UEvrDr1D" },
  { "name": "AUDAX ITALIANO", "league": "Chile", "url": "https://lh3.googleusercontent.com/d/1SenyIgmqBAhFkmWjsJD_jaBjfs5LceMb" },
  { "name": "AUGSBURG", "league": "Alemania", "url": "https://lh3.googleusercontent.com/d/13IHZvzj7DLw87e7DCOL0IJGVixPZBx74" },
  { "name": "AURORA", "league": "Bolivia", "url": "https://lh3.googleusercontent.com/d/1danPk4vsrGk1tf6E339eS2MIvw8_Oasq" },
  { "name": "AUSTIN FC", "league": "MLS", "url": "https://lh3.googleusercontent.com/d/1KDDq7hk0wVc_P3t7dupi1STp-CgcyLV2" },
  { "name": "AUSTRALIA", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/1JfVQ_Rh2yye3Yu5XV8PiheGLIRHv7nc-" },
  { "name": "AUSTRIA", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/1opNpiPwWdPaQgMQZxdg_JyJoIlddL5oc" },
  { "name": "AUXERRE", "league": "Francia", "url": "https://lh3.googleusercontent.com/d/1obtd_XklLKrfZXNjmY2L-KRFxpDMj9W_" },
  { "name": "AYACUCHO FC", "league": "Perú", "url": "https://lh3.googleusercontent.com/d/1Cz_jrggvAFZyfcJW1vL107tJPEfHyoK0" },
  { "name": "BAHÍA", "league": "Brasil", "url": "https://lh3.googleusercontent.com/d/1d2siHqHE1s_c5gl1kRLIAGYodCxSFFho" },
  { "name": "BANFIELD", "league": "Argentina", "url": "https://lh3.googleusercontent.com/d/1n01e_SXc1Zl3mwyElOEsOZhbx8IZkYRR" },
  { "name": "BARCELONA", "league": "España", "url": "https://lh3.googleusercontent.com/d/1Px4NiyNA8AEINcHRY7-iGyzmJBlG4y8i" },
  { "name": "BARCELONA ECUADOR", "league": "Ecuador", "url": "https://lh3.googleusercontent.com/d/1tuZGh80sU_FS9bN3MWwFerQ8sc9IwG8O" },
  { "name": "BARRACAS CENTRAL", "league": "Argentina", "url": "https://lh3.googleusercontent.com/d/1VoVxcfKNyjdpxlUEsm1hRrMx-8CH0QPt" },
  { "name": "BAYER LEVERKUSEN", "league": "Alemania", "url": "https://lh3.googleusercontent.com/d/1_hH_m_Ffx4uRxY91lpoaoT8i9IfQW8-W" },
  { "name": "BAYERN MÜNICH", "league": "Alemania", "url": "https://lh3.googleusercontent.com/d/1gy4-7DFDXr0Y4B21S-8xCfIecXX6g4HV" },
  { "name": "BÉLGICA", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/1JqvEO3EjLFtLlxjpRCy5XP0A1dY9mKkc" },
  { "name": "BELGRANO (C)", "league": "Argentina", "url": "https://lh3.googleusercontent.com/d/1Hu6bhjOzzWqiW3mCMI1ZoeT95tFlw_rp" },
  { "name": "BENFICA", "league": "Portugal", "url": "https://lh3.googleusercontent.com/d/1SACfAiDW0ZdqcHT3YffLDl0leXk3XVo2" },
  { "name": "BINACIONAL", "league": "Perú", "url": "https://lh3.googleusercontent.com/d/1YuNMGHbTUmcyiyv9GQQ-6gfxcK5WVW39" },
  { "name": "BLOOMING", "league": "Bolivia", "url": "https://lh3.googleusercontent.com/d/1gzo8CLavyjf6Rzv3tyD_55ugT15TKD9P" },
  { "name": "BOCA JUNIORS", "league": "Argentina", "url": "https://lh3.googleusercontent.com/d/1yuMoUhBWNIHzzPXIA4AEYDvCNcB7_xNy" },
  { "name": "BOCHUM", "league": "Alemania", "url": "https://lh3.googleusercontent.com/d/166mGCdiL4gcd9gsSjEdqT4C8erXgCBNb" },
  { "name": "BOLIVAR", "league": "Bolivia", "url": "https://lh3.googleusercontent.com/d/132IpgjW40VQRNGAGIvxS2YUP5WYYyFAy" },
  { "name": "BOLOGNA", "league": "Italia", "url": "https://lh3.googleusercontent.com/d/1Qq1-4yxtclsEUJ_kLPcLVWiKZk7od0DY" },
  { "name": "BORUSSIA DORTMUND", "league": "Alemania", "url": "https://lh3.googleusercontent.com/d/1mcoRW5UFX6Urz289tbwZFvBIXaeT1soj" },
  { "name": "BORUSSIA MÖNCHENGLADBACH", "league": "Alemania", "url": "https://lh3.googleusercontent.com/d/1wgTmpBzcH7pTt0q-kZhInJuYJu7beclm" },
  { "name": "BOSTON RIVER", "league": "Uruguay", "url": "https://lh3.googleusercontent.com/d/12YK4fo1nYFkklVBjqH3m3rSBEpxPhKhh" },
  { "name": "BOTAFOGO", "league": "Brasil", "url": "https://lh3.googleusercontent.com/d/1qipNml4np-afQ9scBYGPoOj3TkWwAU4H" },
  { "name": "BOURNEMOUTH", "league": "Inglaterra", "url": "https://lh3.googleusercontent.com/d/1SR8hXOYIEkBwqMSRNNYMaGZklGoZ385k" },
  { "name": "BOYACÁ CHICO", "league": "Colombia", "url": "https://lh3.googleusercontent.com/d/11d8LbmhetZp67YLVi8tCoA0Rhm7Hm50L" },
  { "name": "BRAGA", "league": "Portugal", "url": "https://lh3.googleusercontent.com/d/1d8lW91zMrAom9Fe7qBomE8YMndGw1_hp" },
  { "name": "BRAGANTINO", "league": "Brasil", "url": "https://lh3.googleusercontent.com/d/1ucI9iSwAa1EOAX-MVRxRkOyPt3dUBojP" },
  { "name": "BRASIL", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/1UCw-KW0vD3niq8hb5hmAzTS1Jitc1-AX" },
  { "name": "BRENTFORD", "league": "Inglaterra", "url": "https://lh3.googleusercontent.com/d/1Zuy_dOiIB42Lt2ffhsKFHVuVegHBIAVd" },
  { "name": "BREST", "league": "Francia", "url": "https://lh3.googleusercontent.com/d/1IYvGHheQO-qPCVEesAPVvKBI9QpP8L4e" },
  { "name": "BRIGHTON ALBION", "league": "Inglaterra", "url": "https://lh3.googleusercontent.com/d/1XoNVJtXJCc7XdZIg7y7xvl2xhT_7QOYK" },
  { "name": "BUCAMARANGA", "league": "Colombia", "url": "https://lh3.googleusercontent.com/d/195Uoh_jlf6Z5QYAsDV-IAZUx85_n3Y49" },
  { "name": "CABO VERDE", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/1wfQhFdAnCVXMYRXFywWf1JJAbzzcfjHA" },
  { "name": "CAGLIARI", "league": "Italia", "url": "https://lh3.googleusercontent.com/d/1Cq26eAITsD4bw_8XEx-RXl9cpY6eUHBS" },
  { "name": "CARABOBO", "league": "Venezuela", "url": "https://lh3.googleusercontent.com/d/1rEuqvdMUQCLYb0qTFRUVqW6OU1RJ8au3" },
  { "name": "CARACAS", "league": "Venezuela", "url": "https://lh3.googleusercontent.com/d/1dviBHEKHP-HnBrtxqOsbh1DZMZpfDRyF" },
  { "name": "CEARÁ", "league": "Brasil", "url": "https://lh3.googleusercontent.com/d/1wIPovIbfUX7xd0n9rID3cmYMvhusIz3Q" },
  { "name": "CELTA DE VIGO", "league": "España", "url": "https://lh3.googleusercontent.com/d/141_eHDY-eYLeGPgvfUp7Nn9dffqQhS_K" },
  { "name": "CENTRAL CÓRDOBA", "league": "Argentina", "url": "https://lh3.googleusercontent.com/d/1pAQmCYVc2k873crRflSPMBCG5pibs_Ce" },
  { "name": "CENTRAL ESPAÑOL", "league": "Uruguay", "url": "https://lh3.googleusercontent.com/d/1F-YOIQuObwzG9to05dc3K0E9rirN52CN" },
  { "name": "CERRO", "league": "Uruguay", "url": "https://lh3.googleusercontent.com/d/1gf-SH8USH2N7yWk0j0_jRfx780-SdvBp" },
  { "name": "CERRO LARGO", "league": "Uruguay", "url": "https://lh3.googleusercontent.com/d/1KyOfDpdExvJSSutERCYsevUEenikBIdQ" },
  { "name": "CERRO PORTEÑO", "league": "Paraguay", "url": "https://lh3.googleusercontent.com/d/1HSvzO0g8AVPmK_4spOHzjFbvgDV0iFf4" },
  { "name": "CHACARITA", "league": "Argentina", "url": "https://lh3.googleusercontent.com/d/1RRZwf8sL2FuhKNX1nkVYrB67QltyFACf" },
  { "name": "CHAPECOENSE", "league": "Brasil", "url": "https://lh3.googleusercontent.com/d/1VKdNBNcNwq8pBDQGPQ5RqYLR-3Q7r_UT" },
  { "name": "CHARLOTTE FC", "league": "MLS", "url": "https://lh3.googleusercontent.com/d/1POKR491Znm3UnD8PxleF9JMfs_-m9--h" },
  { "name": "CHELSEA", "league": "Inglaterra", "url": "https://lh3.googleusercontent.com/d/1xVnK-GEok5aTQ43QaXWIyQDc-j9lvSMO" },
  { "name": "CHICAGO FIRE", "league": "MLS", "url": "https://lh3.googleusercontent.com/d/1WepH6Ee7-kGndFIQpMmw7HKjwviaVGSf" },
  { "name": "CHIVAS", "league": "México", "url": "https://lh3.googleusercontent.com/d/1BP4Y1BzIMKkmUiVYuGOVn7b5r3GyEwNz" },
  { "name": "CIENCIANO", "league": "Perú", "url": "https://lh3.googleusercontent.com/d/1UkleTLc03lJ54nbXT_65gTemLjwqkil-" },
  { "name": "CINCINNATI", "league": "MLS", "url": "https://lh3.googleusercontent.com/d/1l_LG_xJ8A_w6MzCoCgCV4j61Cpemaiul" },
  { "name": "CLUB LEÓN", "league": "México", "url": "https://lh3.googleusercontent.com/d/1RJEyRnk1XGs-ZcWuhTLvpFWmWDbz4UBo" },
  { "name": "CLUB TACUARY", "league": "Paraguay", "url": "https://lh3.googleusercontent.com/d/1uEsDJ7_G2d0ewXPz-317xwv-TNNWQZRB" },
  { "name": "COBRELOA", "league": "Chile", "url": "https://lh3.googleusercontent.com/d/1TGsGR4uYOcIL57xCyS7z9TcMbjDKRwWJ" },
  { "name": "COBRESAL", "league": "Chile", "url": "https://lh3.googleusercontent.com/d/136Yeag_3aJ3Mzl-dAnYwC57tB3xXhpVk" },
  { "name": "COLO COLO", "league": "Chile", "url": "https://lh3.googleusercontent.com/d/12jpa0MGrtR8y3_Bgb-YQHtpAs7aFW77E" },
  { "name": "COLOMBIA", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/1jH83lDrOcyKzAkq6lQ8zq9JA_vY84w2F" },
  { "name": "COLÓN", "league": "Argentina", "url": "https://lh3.googleusercontent.com/d/14-yOM-xilY05aAUDW8QN3c4cQsfEczBl" },
  { "name": "COLONIA KOLN", "league": "Alemania", "url": "https://lh3.googleusercontent.com/d/19NNivj2mvBtJq01X21DtKFgfsyVoFYQS" },
  { "name": "COLORADO RAPIDS", "league": "MLS", "url": "https://lh3.googleusercontent.com/d/1BXe5JyNFwEibsijJidvXrd6B3-dx05ie" },
  { "name": "COLUMBUS CREW", "league": "MLS", "url": "https://lh3.googleusercontent.com/d/1nV_nZyARcmcwW370m4Zpb4K2IReCQSyy" },
  { "name": "COMERCIANTES UNIDOS", "league": "Perú", "url": "https://lh3.googleusercontent.com/d/1j12_kYUYhfZGWg3EPKkS-VohH2Brz0M2" },
  { "name": "COMO 1907", "league": "Italia", "url": "https://lh3.googleusercontent.com/d/1UOIBLe9gptbX5Uffma5nTSqN4sxwSF-t" },
  { "name": "COQUIMBO UNIDO", "league": "Chile", "url": "https://lh3.googleusercontent.com/d/19Ku4SQOM8pewNhbYmcc49d1-qKuGLOFE" },
  { "name": "COREA DEL SUR", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/15-AVkAXeKv_mFk9m47a2HamWsYWkKOtf" },
  { "name": "CORINTHIANS", "league": "Brasil", "url": "https://lh3.googleusercontent.com/d/1-ClCSl0qLFM8wMpC9kdkdS9IdqsnsLnd" },
  { "name": "CORITIBA", "league": "Brasil", "url": "https://lh3.googleusercontent.com/d/1Kn1aaf9uHAE_ho4OUrzXtsGOeOsBNXb2" },
  { "name": "COSTA DE MARFIL", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/1d1VRKsZGdwMIJN81cb-HdoIw_0IDwKfM" },
  { "name": "COVENTRY CITY", "league": "Inglaterra", "url": "https://lh3.googleusercontent.com/d/1ilGI0916hAh_STtrsem-Ietv4xjf34EW" },
  { "name": "CROACIA", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/10OwjMcy76gg8Ac43liI0WucEtF1cSckP" },
  { "name": "CRUZ AZUL", "league": "México", "url": "https://lh3.googleusercontent.com/d/1EpO3it1VNIJ1Kas_32nnjO5yBOur9WCT" },
  { "name": "CRUZEIRO", "league": "Brasil", "url": "https://lh3.googleusercontent.com/d/1EXyIkUCFNCSIRwXgz4ScZthcNFRx-L3i" },
  { "name": "CRYSTAL PALACE", "league": "Inglaterra", "url": "https://lh3.googleusercontent.com/d/1NGqdSvViZpEHCyezZ0FVJ9WYcdlY7V7o" },
  { "name": "CS SAN LORENZO", "league": "Paraguay", "url": "https://lh3.googleusercontent.com/d/1UsxHHxCQQhW_ezIoO9D4pJ1j3-ZY8pH4" },
  { "name": "CÚCUTA DEPORTIVO", "league": "Colombia", "url": "https://lh3.googleusercontent.com/d/1gX27yB0VM_QQGCcDFzNRN7RfXRWWabXw" },
  { "name": "CUIABA", "league": "Brasil", "url": "https://lh3.googleusercontent.com/d/1FwjhYBI6nJ5HiEs3JFbqI9I9jCIBpLxK" },
  { "name": "CUNIBURO FC", "league": "Ecuador", "url": "https://lh3.googleusercontent.com/d/1pgvXD-Ileaz2fRK5gP0riCaKKbkMqVjo" },
  { "name": "CURAZAO", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/1qRJjVffpGgtDNBh2ZA-bX8u9zdPHxQ5c" },
  { "name": "CUSCO FC", "league": "Perú", "url": "https://lh3.googleusercontent.com/d/102o2sQWuOKgz9NKP5TfpQxGx_hE6Oavf" },
  { "name": "DALLAS", "league": "MLS", "url": "https://lh3.googleusercontent.com/d/13X8UUr-lGYHf8kElKLqpVuinmdxjvL8B" },
  { "name": "DANUBIO", "league": "Uruguay", "url": "https://lh3.googleusercontent.com/d/1PRFuyntY8QdkitvXPLV3KlhLbzldOYt4" },
  { "name": "DC UNITED", "league": "MLS", "url": "https://lh3.googleusercontent.com/d/1mKCnWkEfO0jDzZZbyCdVskUsWkU4sChh" },
  { "name": "DEFENSA Y JUSTICIA", "league": "Argentina", "url": "https://lh3.googleusercontent.com/d/1Fq33eE6n-ZZx7qvUMmc-5mU8u9bjFY2L" },
  { "name": "DEFENSOR SPORTING", "league": "Uruguay", "url": "https://lh3.googleusercontent.com/d/16nMqMx-6xeW05EbUiJKEgS6vqy8bERL1" },
  { "name": "DELFÍN SC", "league": "Ecuador", "url": "https://lh3.googleusercontent.com/d/17qaAxrHQVWaJo4G5gGzxFC_2XQaLFBU_" },
  { "name": "DEPORTES CONCEPCIÓN", "league": "Chile", "url": "https://lh3.googleusercontent.com/d/1MMJeRscY1ehJXZU0JIW9ZwUSzn54aoHo" },
  { "name": "DEPORTES COPIAPÓ", "league": "Chile", "url": "https://lh3.googleusercontent.com/d/15rtHsZONG41VBbvzie3j2IW69_pLM0wN" },
  { "name": "DEPORTES IQUIQUE", "league": "Chile", "url": "https://lh3.googleusercontent.com/d/1B__FX3YBqtqbQthQvi6S959XMpmNhbrP" },
  { "name": "DEPORTES TOLIMA", "league": "Colombia", "url": "https://lh3.googleusercontent.com/d/1ZNKmbWLnnLIKwSzf3coa055m-O-onMQs" },
  { "name": "DEPORTIVO CALI", "league": "Colombia", "url": "https://lh3.googleusercontent.com/d/1krfB9vf3jIZehdU5aOSoaZjtb6XmoR9n" },
  { "name": "DEPORTIVO CUENCA", "league": "Ecuador", "url": "https://lh3.googleusercontent.com/d/1IkKG7udfD6uWPXNMbS0XPsP1YilyxR_Z" },
  { "name": "DEPORTIVO GARCILASO", "league": "Perú", "url": "https://lh3.googleusercontent.com/d/1nuzYXYp9KGJlxG3wEKZjcp4dGXHYQJwk" },
  { "name": "DEPORTIVO LA GUAIRA", "league": "Venezuela", "url": "https://lh3.googleusercontent.com/d/1E7kpa2hxErKLMtpbmbbaOZvh2GM7khdZ" },
  { "name": "DEPORTIVO PASTO", "league": "Colombia", "url": "https://lh3.googleusercontent.com/d/18BN7AZBZQTwhIpECBzxXYPcGJb8pFIDp" },
  { "name": "DEPORTIVO PEREIRA", "league": "Colombia", "url": "https://lh3.googleusercontent.com/d/1jvgEx_TbGgAKNXZbxHkDtablVm9-H1L6" },
  { "name": "DEPORTIVO TÁCHIRA", "league": "Venezuela", "url": "https://lh3.googleusercontent.com/d/1tOsCHG0h53JU_A60FQ_ItsM_ZHQbXj3A" },
  { "name": "ECUADOR", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/1T_LYpv3LHeZB9tZyneQe1NEvEF-vn0pi" },
  { "name": "EGIPTO", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/1DMo22J32DYSfaSg-L8p5FSG-oxECDgh2" },
  { "name": "EINTRACHT FRANKFURT", "league": "Alemania", "url": "https://lh3.googleusercontent.com/d/1xwFGEqK164WrnnvDUJWht14edWYzOXRg" },
  { "name": "EL NACIONAL", "league": "Ecuador", "url": "https://lh3.googleusercontent.com/d/1K_Xo8Ej1CoSkH27Rqn_SEC67I4KWywMC" },
  { "name": "ELCHE", "league": "España", "url": "https://lh3.googleusercontent.com/d/1TgN-YY2EcQm825QhiYqGPOQ4xw-w2RPc" },
  { "name": "EMELEC", "league": "Ecuador", "url": "https://lh3.googleusercontent.com/d/1pL5MPnYWE26aKGOXmKVxZgCVpOPkva1X" },
  { "name": "EMPOLI", "league": "Italia", "url": "https://lh3.googleusercontent.com/d/1d3Qt3qGfzGUlSDq4S2zambRckScNXDqB" },
  { "name": "ENVIGADO", "league": "Colombia", "url": "https://lh3.googleusercontent.com/d/1dk4hxTVbTuMEuOBf_jWkb-MKil_gwP_d" },
  { "name": "EQUIDAD", "league": "Colombia", "url": "https://lh3.googleusercontent.com/d/1Kev6xHppXlRJJhmaDb0WcjOSJU7rUQGM" },
  { "name": "ESCOCIA", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/1chMRMTcPqYaH6c9bHniQebiAAgner5ce" },
  { "name": "ESPAÑA", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/159XzuKJlHYrUDzjaV7z3L2FRlISVVxIG" },
  { "name": "ESPANYOL", "league": "España", "url": "https://lh3.googleusercontent.com/d/17Z8D0-MoLcy-7Ssm61Dke7vViuGqoeAc" },
  { "name": "ESPERANCE ST", "league": "Resto del mundo", "url": "https://lh3.googleusercontent.com/d/1yfhCwqDQod60YL4SOnEcaf63JYFqsavC" },
  { "name": "ESTADOS UNIDOS", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/1PI9mX3CAr5_4tn7SThXXCT9on6xyRR0v" },
  { "name": "ESTUDIANTES (LP)", "league": "Argentina", "url": "https://lh3.googleusercontent.com/d/1HkLKAF8DyJUHbc11Q_xOuqEC90nllfiQ" },
  { "name": "ESTUDIANTES (RC)", "league": "Argentina", "url": "https://lh3.googleusercontent.com/d/1Us02ex_VkZr7BGc56EouzZnZsmHGbJ8g" },
  { "name": "ESTUDIANTES DE MÉRIDA", "league": "Venezuela", "url": "https://lh3.googleusercontent.com/d/1cv4ZuAQmaH_hMzRw9mji3DojHBoZt2Kx" },
  { "name": "EVERTON", "league": "Chile", "url": "https://lh3.googleusercontent.com/d/1EfheEIFq5nX6bwDpD6z0Fg-EPaEMKsfX" },
  { "name": "EVERTON", "league": "Inglaterra", "url": "https://lh3.googleusercontent.com/d/1BFmFDdO8ncS7I-SeacH1NXV2_pxZ2p_-" },
  { "name": "FÉNIX", "league": "Uruguay", "url": "https://lh3.googleusercontent.com/d/1y678mQchQOapNteCEvw_dOzA26QqYXdv" },
  { "name": "FEYENOORD", "league": "Holanda", "url": "https://lh3.googleusercontent.com/d/1ORnNeSes-0Bclfr_xjLe7H_P6kDVMcqK" },
  { "name": "FIORENTINA", "league": "Italia", "url": "https://lh3.googleusercontent.com/d/1VGQZNvRXmhIKrkeL7K1KUBevS3cUaAaT" },
  { "name": "FLAMENGO", "league": "Brasil", "url": "https://lh3.googleusercontent.com/d/1sINyq6p9fexmN3mc5Vb1eRfo-TTvMcnf" },
  { "name": "FLUMINENSE", "league": "Brasil", "url": "https://lh3.googleusercontent.com/d/1Mb_JYW6yESZGyHvoBNkF0ffIDNeyYJ9N" },
  { "name": "FORTALEZA", "league": "Brasil", "url": "https://lh3.googleusercontent.com/d/1Vg7FZg8P5i8S8qY8gV7me8J2sK0oSMW9" },
  { "name": "FORTALEZA C.E.I.F", "league": "Colombia", "url": "https://lh3.googleusercontent.com/d/14-zIu5pgP15aMMLu54w-0ZASiAFKA9Cq" },
  { "name": "FRANCIA", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/19ruEf18F5xk2G0FHFDNd32ssijN2tA9D" },
  { "name": "FRIBURGO", "league": "Alemania", "url": "https://lh3.googleusercontent.com/d/1vcSDcT6d6V8ZI0MASC9KsG5Yme3JPzUC" },
  { "name": "FROSINONE", "league": "Italia", "url": "https://lh3.googleusercontent.com/d/1RyL0MOqcPiRpR0y3d4buG5_887d9Z65o" },
  { "name": "FULHAM", "league": "Inglaterra", "url": "https://lh3.googleusercontent.com/d/1dQScirFJUMufF_mnDRLTPg0tazZVtKwK" },
  { "name": "GALES", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/1vlfLjYc7rwOEz0T4iVrLdSkh7HGge7z4" },
  { "name": "GENERAL CABALLERO", "league": "Paraguay", "url": "https://lh3.googleusercontent.com/d/1YO7AB_WeZAuOesOhxjo8f8wdHXnZnhzB" },
  { "name": "GENOA", "league": "Italia", "url": "https://lh3.googleusercontent.com/d/1hlzmpHQp8CRr50Cye0pcq24T-PsUxANy" },
  { "name": "GETAFE", "league": "España", "url": "https://lh3.googleusercontent.com/d/1xD5kcAyxKA7cw4h31AzhsI6GHmOgW9cZ" },
  { "name": "GHANA", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/1FYcmrcf57WBsIPEA47CVfa0iNOb4kul6" },
  { "name": "GIMNASIA (LP)", "league": "Argentina", "url": "https://lh3.googleusercontent.com/d/1jEM4zrKYaIYcQnghf7B2LV7vx_T0J08X" },
  { "name": "GIMNASIA (M)", "league": "Argentina", "url": "https://lh3.googleusercontent.com/d/1oJidI-wi-TbdqLSisvKIUsKEdvxylKV5" },
  { "name": "GIRONA", "league": "España", "url": "https://lh3.googleusercontent.com/d/1mRvus-myw0xkMXNmtB4aZVq4PafRWQGM" },
  { "name": "GODOY CRUZ", "league": "Argentina", "url": "https://lh3.googleusercontent.com/d/1GgeQD0MFqbwW_-aSL4ttLlldqntirobf" },
  { "name": "GRECIA", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/1hRjkc1SyVxsptO1ISPUR-v8C6vkJBJec" },
  { "name": "GREMIO", "league": "Brasil", "url": "https://lh3.googleusercontent.com/d/1m1ZOR8RL47zL75lzeQjJNJ9-Eq06aX3K" },
  { "name": "GUABIRÁ", "league": "Bolivia", "url": "https://lh3.googleusercontent.com/d/18h1-zCLVufpIH4WAq4wXIZ4DfUDVyCAT" },
  { "name": "GUARANÍ", "league": "Paraguay", "url": "https://lh3.googleusercontent.com/d/1qiqIf-_JDtzMB89jkOn-Bt7769whxxBi" },
  { "name": "HAITÍ", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/1GikSz3Z_ltnUEXR6r9zQa7UUygsq0-_R" },
  { "name": "HAMBURGO SV", "league": "Alemania", "url": "https://lh3.googleusercontent.com/d/1nGw4tlbbaqVeUB0nkw2DrJ8hlMym6dUd" },
  { "name": "HEIDENHEIM", "league": "Alemania", "url": "https://lh3.googleusercontent.com/d/1Z_eA-Xr1mibudkAkpJptWzGfaSq4EsRO" },
  { "name": "HELLAS VERONA", "league": "Italia", "url": "https://lh3.googleusercontent.com/d/1o4wIgjSdSd15CXiEtEbjM4yM0YbmKqPk" },
  { "name": "HOFFENHEIM", "league": "Alemania", "url": "https://lh3.googleusercontent.com/d/14N7U9JMJzXv5Rr3tlfo8_EtJW7sCe8IG" },
  { "name": "HOUSTON DYNAMO", "league": "MLS", "url": "https://lh3.googleusercontent.com/d/1twvJKkhSORifDBTxgcnpVnKzSYqzR5GU" },
  { "name": "HUACHIPATO", "league": "Chile", "url": "https://lh3.googleusercontent.com/d/17gImuRdh51q38csFxlKJy2yqokJuDEM6" },
  { "name": "HUESCA", "league": "España", "url": "https://lh3.googleusercontent.com/d/1Af7dKl39iaDMqEdNZzPt7eHMv77wCKz8" },
  { "name": "HULL CITY", "league": "Inglaterra", "url": "https://lh3.googleusercontent.com/d/1LKmQdCLGRaaQpyRwRGn6w-tKeKyepTQw" },
  { "name": "HURACÁN", "league": "Argentina", "url": "https://lh3.googleusercontent.com/d/1LyU1DSwR6cG8wwLDcyvyOJmJAzzKCpJ1" },
  { "name": "INDEPENDIENTE", "league": "Argentina", "url": "https://lh3.googleusercontent.com/d/1NN-0tJidQ5l8Y7xcjPOfO1_sFVTAJlo0" },
  { "name": "INDEPENDIENTE DEL VALLE", "league": "Ecuador", "url": "https://lh3.googleusercontent.com/d/1BRqwWLAuWIHLG3-8X_W4WNTbfMogbM72" },
  { "name": "INDEPENDIENTE MEDELLIN", "league": "Colombia", "url": "https://lh3.googleusercontent.com/d/17y4X2zBXQSAPip_8TZ2nXJ4w5c-xlOVA" },
  { "name": "INDEPENDIENTE PETROLERO", "league": "Bolivia", "url": "https://lh3.googleusercontent.com/d/1L6bIbmum3N__zUjB1aApy-3zuLUHQ9aQ" },
  { "name": "INDEPENDIENTE RIVADAVIA", "league": "Argentina", "url": "https://lh3.googleusercontent.com/d/1Sw6skvZvezvclBEPX29z__f1SxjjZsQt" },
  { "name": "INDEPENDIENTE SANTA FE", "league": "Colombia", "url": "https://lh3.googleusercontent.com/d/1oUYBLTa5l-rAa2i9T6NqPNKzzLIuTOPM" },
  { "name": "INGLATERRA", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/1lGUeHiMaTHrJnFbyStVgL8VlrijH6nZL" },
  { "name": "INSTITUTO", "league": "Argentina", "url": "https://lh3.googleusercontent.com/d/1dc7ry4hEZSH51gnCFatOnW5AgeX8-cJq" },
  { "name": "INTER", "league": "Italia", "url": "https://lh3.googleusercontent.com/d/12LnNY5BHRkw69kO3p8D7HpuDEkaZPiMK" },
  { "name": "INTER MIAMI", "league": "MLS", "url": "https://lh3.googleusercontent.com/d/1lTgG13jLJpWcDVW1uEo1SR0aSFRQZ9NK" },
  { "name": "INTERNACIONAL", "league": "Brasil", "url": "https://lh3.googleusercontent.com/d/18Hpd20WN_7OSVPsg_KUW9jcM-W_U5OK6" },
  { "name": "INTERNACIONAL DE BOGOTÁ", "league": "Colombia", "url": "https://lh3.googleusercontent.com/d/15twkz03GxhTnVtAgmYGgsug5HM2NZCAQ" },
  { "name": "IPSWICH TOWN", "league": "Inglaterra", "url": "https://lh3.googleusercontent.com/d/1wvm6kMhBvZZG21ASICR-9U0c6jDm-Ym7" },
  { "name": "IRÁN", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/1wtRIgOXLGrDzQ1BLKynZVR5CAy9BRnMz" },
  { "name": "ITALIA", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/1GLuPh28C3CJlrlOeyzaMCnc71JuTBhPY" },
  { "name": "JAGUARES FC", "league": "Colombia", "url": "https://lh3.googleusercontent.com/d/1tYeW1ACsY2qzAr1XtzDOiL9hgUUIMrm4" },
  { "name": "JAPÓN", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/1mHO_G0-uLi82BAl-EhjfUYta66ZPSMz9" },
  { "name": "JORDANIA", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/1s6DmXe6dk1YnEfanAhRu5MiMcMSVjX8L" },
  { "name": "JUAN PABLO II", "league": "Perú", "url": "https://lh3.googleusercontent.com/d/1bEBF5wGX3CoLewPr4EU2mU7f1qgqwwk_" },
  { "name": "JUÁREZ", "league": "México", "url": "https://lh3.googleusercontent.com/d/1Ytrhf-bt-QvdTm-F9EhO0IRJ0F6Q158d" },
  { "name": "JUNIOR", "league": "Colombia", "url": "https://lh3.googleusercontent.com/d/1uEoIKoxENPKvPyb6aQbvPYuYv4StL3TB" },
  { "name": "JUVENTUD", "league": "Uruguay", "url": "https://lh3.googleusercontent.com/d/1VSgWy0yjmHkOVXtYCPXmZOmLeErmxS0T" },
  { "name": "JUVENTUDE", "league": "Brasil", "url": "https://lh3.googleusercontent.com/d/1qORFAIj20ZoxlEDZNuQg36mbKYxAkS9H" },
  { "name": "JUVENTUS", "league": "Italia", "url": "https://lh3.googleusercontent.com/d/1sBvCeJCjf5ii7Tv-0tpRNHFTAd5lxZo0" },
  { "name": "KANSAS CITY", "league": "MLS", "url": "https://lh3.googleusercontent.com/d/1xpWKgp_iblaO5dq3i3y29h4TZt-HviCx" },
  { "name": "KELER HOLSTEIN", "league": "Alemania", "url": "https://lh3.googleusercontent.com/d/17laxNi12oxbtMENdtxVB--vlu5roOwd1" },
  { "name": "LA GALAXY", "league": "MLS", "url": "https://lh3.googleusercontent.com/d/1CGktDXnShMIl3wJQl311PPcyX4D7R6vp" },
  { "name": "LA SERENA", "league": "Chile", "url": "https://lh3.googleusercontent.com/d/1AqdMo2HjsXPnUgSiRRA5iOtvQOtFHpOq" },
  { "name": "LANÚS", "league": "Argentina", "url": "https://lh3.googleusercontent.com/d/11mG2ck_N78KUh0X6LU8PC0905FIZKJAE" },
  { "name": "LAS PALMAS", "league": "España", "url": "https://lh3.googleusercontent.com/d/1DA3aDRPei9r_SNjiZZMMajN6s9xm5imy" },
  { "name": "LAZIO", "league": "Italia", "url": "https://lh3.googleusercontent.com/d/14l99SJSHOt52NydNQ_RvWBg03H33_O20" },
  { "name": "LE HAVRE", "league": "Francia", "url": "https://lh3.googleusercontent.com/d/1G92lSLSI51ncHq9MuFZoKutPrkcZiBG6" },
  { "name": "LE MANS", "league": "Francia", "url": "https://lh3.googleusercontent.com/d/1Sfk6QSlwWEsaMxEPuOc1FX95TLmQJvuc" },
  { "name": "LECCE", "league": "Italia", "url": "https://lh3.googleusercontent.com/d/1OGYkL09b8zkUszrJF3RxXPYBD4GGxtFi" },
  { "name": "LEGANÉS", "league": "España", "url": "https://lh3.googleusercontent.com/d/1AO4ZIzk-tLooHkudmxZxx3Abhw7aBUcK" },
  { "name": "LEICESTER", "league": "Inglaterra", "url": "https://lh3.googleusercontent.com/d/14gBO_t94keO7EDrIsM1ohzaQUHP4zxHO" },
  { "name": "LENS", "league": "Francia", "url": "https://lh3.googleusercontent.com/d/1Uv_pqUPvY8v-nnUi7-EHtKJ7sH30F8cr" },
  { "name": "LEVANTE", "league": "España", "url": "https://lh3.googleusercontent.com/d/1ddj0KNEjnR66K8avO9KMb_56rIAsvAaE" },
  { "name": "LIBERTAD", "league": "Paraguay", "url": "https://lh3.googleusercontent.com/d/181UaBXQQ-GlBFbNzrFR9aaOqPSm2Ewvu" },
  { "name": "LIBERTAD FC", "league": "Ecuador", "url": "https://lh3.googleusercontent.com/d/1HWX9MC6eXpen5asgJMNE-PrzTq9I0ayE" },
  { "name": "LIGA DE QUITO", "league": "Ecuador", "url": "https://lh3.googleusercontent.com/d/1eFFe-4M4kOY8SAsnNTpR9LjJaZtKa6C2" },
  { "name": "LILLE", "league": "Francia", "url": "https://lh3.googleusercontent.com/d/1BCVawZKEHnIU6o1Kf8jq5tunOf1ZEH7B" },
  { "name": "LIMACHE", "league": "Chile", "url": "https://lh3.googleusercontent.com/d/1Ahsgs6PFhmGljy75TlPgYX2dIgeoAF-G" },
  { "name": "LIVERPOOL", "league": "Uruguay", "url": "https://lh3.googleusercontent.com/d/11f8BIuyRtV_oX-_w6gvfWhh-JTbUQbgg" },
  { "name": "LIVERPOOL", "league": "Inglaterra", "url": "https://lh3.googleusercontent.com/d/1zu8WBUZ81G6d-aJdIhiREmniVdQ-F5VP" },
  { "name": "LLANEROS FC", "league": "Colombia", "url": "https://lh3.googleusercontent.com/d/1Lluv-vko7gNYujelaDeY7litHHmG8h1X" },
  { "name": "LORIENT", "league": "Francia", "url": "https://lh3.googleusercontent.com/d/1DGbBrzMMVhFavFDTMqrLhIqNllSjdhPC" },
  { "name": "LOS ANGELES FC", "league": "MLS", "url": "https://lh3.googleusercontent.com/d/1sBcY2psOelecnlOLCbjyHt4XPxB_sbzS" },
  { "name": "LOS CHANKAS CYC", "league": "Perú", "url": "https://lh3.googleusercontent.com/d/1ej0A_PF0cC-yODaMkrqsT1heNZc1TXeP" },
  { "name": "MACARA", "league": "Ecuador", "url": "https://lh3.googleusercontent.com/d/1hG9Lp6abljTttroXETZtV_l5NXEBh0mi" },
  { "name": "MAINZ 05", "league": "Alemania", "url": "https://lh3.googleusercontent.com/d/1qdb57OnW3bHAmz1LnqjKcx552RYC3t5A" },
  { "name": "MALAGA", "league": "España", "url": "https://lh3.googleusercontent.com/d/1nEHJVUoTiHgBWw0XTHx1uYgTELgRSygD" },
  { "name": "MALDONADO", "league": "Uruguay", "url": "https://lh3.googleusercontent.com/d/13GN6jP-XIdJUHgsOGUU-lAk1cfwdpWK6" },
  { "name": "MALLORCA", "league": "España", "url": "https://lh3.googleusercontent.com/d/1HPThfc3YDnwJvYU9I5-39OBooErUfrMp" },
  { "name": "MAMELODI SUNDOWNS", "league": "Resto del mundo", "url": "https://lh3.googleusercontent.com/d/1bgFYXUFrd8UgEZpKn7IKUpKanaCkciK3" },
  { "name": "MANCHESTER CITY", "league": "Inglaterra", "url": "https://lh3.googleusercontent.com/d/1KDb_ZSPxMlYsT9wSpTiVHmQAFLWNdh-i" },
  { "name": "MANCHESTER UNITED", "league": "Inglaterra", "url": "https://lh3.googleusercontent.com/d/1ZcYp9P5XWM0dTnSQIHeyWqJmNvADhmxQ" },
  { "name": "MANTA FC", "league": "Ecuador", "url": "https://lh3.googleusercontent.com/d/16ekar6nmtEAjWfpJmXAqNRYn1qn3S_ib" },
  { "name": "MARRUECOS", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/1C42VSk9axlLHrVxVxvlvdfgWfMl9Nvlp" },
  { "name": "MAZATLÁN", "league": "México", "url": "https://lh3.googleusercontent.com/d/1Mnh7rBFnz_8zGeQ6eKIpsRv_eKh9LZ1C" },
  { "name": "MELGAR", "league": "Perú", "url": "https://lh3.googleusercontent.com/d/1Cc2Pq0AqtyiTARw9q2t6q4OROyozsSlv" },
  { "name": "METROPOLITANOS", "league": "Venezuela", "url": "https://lh3.googleusercontent.com/d/1fW1jh-KdjvdNe3bmxknw1i5v1SOzx2y9" },
  { "name": "MÉXICO", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/1d2l2tX7BfDDHHbZhNajf0vfxuOHHy7Ua" },
  { "name": "MILAN", "league": "Italia", "url": "https://lh3.googleusercontent.com/d/1AbEeKPgeNz6p-iGDjR2lUbW6u9IM5T44" },
  { "name": "MILLONARIOS", "league": "Colombia", "url": "https://lh3.googleusercontent.com/d/15tg41_0uaklz9ijAVj0GGEPfGWI8DsaY" },
  { "name": "MINNESOTA UNITED", "league": "MLS", "url": "https://lh3.googleusercontent.com/d/1NS0T89D86YJtiD4WeoCzpJcoC79yPJbk" },
  { "name": "MIRAMAR MISIONES", "league": "Uruguay", "url": "https://lh3.googleusercontent.com/d/1L8bK7Nylbg5eLZIa0C0a6nTtquZqLWCC" },
  { "name": "MIRASSOL", "league": "Brasil", "url": "https://lh3.googleusercontent.com/d/1gp4h1wHC5twJ_qdgfdQdlj2nN978KZ9s" },
  { "name": "MÓNACO", "league": "Francia", "url": "https://lh3.googleusercontent.com/d/1GRKD69wfkxzAsDstJ863M6o24q7eH_nW" },
  { "name": "MONAGAS SC", "league": "Venezuela", "url": "https://lh3.googleusercontent.com/d/1v6DzsNxBibbmD0uxqdZQV7vG2Yi-Pjlt" },
  { "name": "MONTERREY", "league": "México", "url": "https://lh3.googleusercontent.com/d/1KWSz8NTjLs7o21mAzAigrb6u9ZWIYkE5" },
  { "name": "MONTEVIDEO CITY TORQUE", "league": "Uruguay", "url": "https://lh3.googleusercontent.com/d/15rcJa9rQRK4WQLYWeHqbtQ_rZe57YY1E" },
  { "name": "MONTEVIDEO WANDERERS", "league": "Uruguay", "url": "https://lh3.googleusercontent.com/d/1agRDifIjn1zvw0nSv4Tv3CBgi1Szj7XM" },
  { "name": "MONTPELLIER", "league": "Francia", "url": "https://lh3.googleusercontent.com/d/14ATTTvBPIaWTPOJJURXHULR0FqPrpc2E" },
  { "name": "MONTRÉAL", "league": "MLS", "url": "https://lh3.googleusercontent.com/d/1nW_xeBAokhhyOFCtgK6zhy-EBUyjc-gt" },
  { "name": "MONZA", "league": "Italia", "url": "https://lh3.googleusercontent.com/d/12x1Ty2p9L-4x79yRtxMYHBm6WEmqP-57" },
  { "name": "MUSHUC RUNA", "league": "Ecuador", "url": "https://lh3.googleusercontent.com/d/1B5csSoUPS6ZsrhhOnwQWpnOVTYUIZooc" },
  { "name": "NACIONAL", "league": "Uruguay", "url": "https://lh3.googleusercontent.com/d/1eB_4TFIp6hOz8IeAFpCGZXlBh4yw83q2" },
  { "name": "NACIONAL (P)", "league": "Paraguay", "url": "https://lh3.googleusercontent.com/d/1L6B5NfHxRRvaprwmD_WHpBPE6X4JSXoD" },
  { "name": "NACIONAL POTOSÍ", "league": "Bolivia", "url": "https://lh3.googleusercontent.com/d/1mEmE7fsneh7j151C34G-HWFViuqZJv8g" },
  { "name": "NANTES", "league": "Francia", "url": "https://lh3.googleusercontent.com/d/1_Hs4SZz86gjTRmzNq3ykaHKjPabA8zyR" },
  { "name": "NAPOLI", "league": "Italia", "url": "https://lh3.googleusercontent.com/d/14DsjYDVBVrHmKs1mysmmnyNMFoj70tz7" },
  { "name": "NASHVILLE SC", "league": "MLS", "url": "https://lh3.googleusercontent.com/d/1vDiyiejWu5OzjGACuSsELQaN6iwOoiDY" },
  { "name": "NECAXA", "league": "México", "url": "https://lh3.googleusercontent.com/d/1iMspnpm_Zw2vXoH3_UVFSpHaf_Bo4leR" },
  { "name": "NEW ENGLAND REVOLUTION", "league": "MLS", "url": "https://lh3.googleusercontent.com/d/1yixzuAVeMt8LDZR2lK-NZWFxLYTEadNl" },
  { "name": "NEW YORK CITY", "league": "MLS", "url": "https://lh3.googleusercontent.com/d/1ATZUxk8JcEWMjy4UZFpXXDIBXFfUkdkq" },
  { "name": "NEW YORK RED BULL", "league": "MLS", "url": "https://lh3.googleusercontent.com/d/1uwKlJvpkf6HWrUxXl92G1bBVecs4e3C1" },
  { "name": "NEWCASTLE", "league": "Inglaterra", "url": "https://lh3.googleusercontent.com/d/10CfaVLmzN5gWAoxV2xkOK73__zx_tODw" },
  { "name": "NEWELL´S", "league": "Argentina", "url": "https://lh3.googleusercontent.com/d/1bLMo0sKMHoR-kYf5kZIAXJai3uteWdpz" },
  { "name": "NIZA", "league": "Francia", "url": "https://lh3.googleusercontent.com/d/1-hMjboXndLocXT-a2HYzyEoXzQ7jOLgt" },
  { "name": "NORUEGA", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/1vRdFu71bUwRReNQG-L2kFH3m97DiidHR" },
  { "name": "NOTTINGHAM FOREST", "league": "Inglaterra", "url": "https://lh3.googleusercontent.com/d/16d5cOF0ADcxVlng5sV2jB4tPdAT7fa7A" },
  { "name": "ÑUBLENSE", "league": "Chile", "url": "https://lh3.googleusercontent.com/d/1wmpjm-GYkNC_bS7ymTOYBUrk8yUajrqS" },
  { "name": "NUEVA ZELANDA", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/1q0FTEqV2Q5e03Lo3N5aKBk0b5VUWuDsT" },
  { "name": "O´HIGGINS", "league": "Chile", "url": "https://lh3.googleusercontent.com/d/1XSifC0JyaZ8UlVT1v5qi9jaRFZkIhOot" },
  { "name": "OLIMPIA", "league": "Paraguay", "url": "https://lh3.googleusercontent.com/d/1GK5nYqWCevMa2HBaXXqj_MJ9MmvLTrqD" },
  { "name": "OLYMPIQUE LYON", "league": "Francia", "url": "https://lh3.googleusercontent.com/d/1jic1fO7UKl_4pHBYHgcSYmYbleRz_085" },
  { "name": "OLYMPIQUE MARSELLA", "league": "Francia", "url": "https://lh3.googleusercontent.com/d/1DBTIW2FQcgszTcOizgo4u27XoQLgNs2n" },
  { "name": "ONCE CALDAS", "league": "Colombia", "url": "https://lh3.googleusercontent.com/d/1HusCSc-M-VySgXyTyszeeYsboC6QsFTf" },
  { "name": "ORENSE FC", "league": "Ecuador", "url": "https://lh3.googleusercontent.com/d/1eETo82Lh0PJK69cuD8PsVbAadknD-Bic" },
  { "name": "ORIENTE PETROLERO", "league": "Bolivia", "url": "https://lh3.googleusercontent.com/d/1JoJ8EspU6u7uqShWig3hzX01ZCltuoGG" },
  { "name": "ORLANDO CITY", "league": "MLS", "url": "https://lh3.googleusercontent.com/d/11D2iG1OA_qY0Xyrf_vWujJimGP_E8jvb" },
  { "name": "OSASUNA", "league": "España", "url": "https://lh3.googleusercontent.com/d/19t8ZYzvrnFZvFkND-mpkSgF3ejJHyTgH" },
  { "name": "PACHUCA", "league": "México", "url": "https://lh3.googleusercontent.com/d/15RIH5nMdDwHNlLMIp9XSCp_3UlVQBxNi" },
  { "name": "PADERBORN", "league": "Alemania", "url": "https://lh3.googleusercontent.com/d/1eHA8QLysyQpYTJBFt-qE_unqHcUE9a_8" },
  { "name": "PAÍSES BAJOS", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/11HiC41AU9xeDL5x6NvMkhbG3o2Wm_G49" },
  { "name": "PALESTINO", "league": "Chile", "url": "https://lh3.googleusercontent.com/d/1cWYD7jx-631DJHk3aDmyE1lfr_8QjUwb" },
  { "name": "PALMEIRAS", "league": "Brasil", "url": "https://lh3.googleusercontent.com/d/10lCOa2JwazmtM1Q-yay7pJdHFg7XCcMk" },
  { "name": "PANAMÁ", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/11tkXSgKIK5jlnANr5EAAFXFUhb5K02WC" },
  { "name": "Paraguay", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/1yiF4XX4SH28A2FZX-ka0nZBUhszLGS-R" },
  { "name": "PARIS FC", "league": "Francia", "url": "https://lh3.googleusercontent.com/d/1r_Hz6R5nJfCsk8lXqr8zn9NZ40XjTOK9" },
  { "name": "PARMA", "league": "Italia", "url": "https://lh3.googleusercontent.com/d/1Z9h9tpTvss_16dpwRpL1D8Wvylwr9aZh" },
  { "name": "PATRIOTAS", "league": "Colombia", "url": "https://lh3.googleusercontent.com/d/1_I_stmPyBgmwz6yHkiSCj2xTdBqV-2KW" },
  { "name": "PEÑAROL", "league": "Uruguay", "url": "https://lh3.googleusercontent.com/d/1INzOBC_KmPV5ecVbBVyq9mU2642KhfTG" },
  { "name": "PHILADELPHIA UNION", "league": "MLS", "url": "https://lh3.googleusercontent.com/d/1ta4e0tJTk09PQdilANP1hHoaK-7mf_qY" },
  { "name": "PLATENSE", "league": "Argentina", "url": "https://lh3.googleusercontent.com/d/1esFzaVP6L4qpq133VlHhW0_VpsEhocmZ" },
  { "name": "PLAZA COLONIA", "league": "Uruguay", "url": "https://lh3.googleusercontent.com/d/1qcJHZCUyWueE7qBaEpyic-gpQL7kkz3v" },
  { "name": "PORTLAND TIMBERS", "league": "MLS", "url": "https://lh3.googleusercontent.com/d/11nslVRF9bKOe-V4G4x9DUxE9r-sBrt-l" },
  { "name": "PORTO", "league": "Portugal", "url": "https://lh3.googleusercontent.com/d/1nVbe2bmCZn4d4gbKJTo34yTzL-XhuBFA" },
  { "name": "PORTUGAL", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/1GdHl4BnWbaRa05a3QS3zTDIFcz9AXYy9" },
  { "name": "PORTUGUESA", "league": "Venezuela", "url": "https://lh3.googleusercontent.com/d/10OqtKC30cWcs1wyzC2vGfZcKo38epfvZ" },
  { "name": "PROGRESO", "league": "Uruguay", "url": "https://lh3.googleusercontent.com/d/1n-3-OOfJkVGqu1skMsQbhjaUcrwbNuhb" },
  { "name": "PSG", "league": "Francia", "url": "https://lh3.googleusercontent.com/d/1vcYQOkdt22b9ijem1lnJ2tuGvY0RWItK" },
  { "name": "PSV", "league": "Holanda", "url": "https://lh3.googleusercontent.com/d/1UvJ5S8cLCqCD2hd6Q2ZwwtHnxcBVuBKp" },
  { "name": "PUEBLA", "league": "México", "url": "https://lh3.googleusercontent.com/d/1Qc_3mG6MxazHORr3VI5I0fUjoUGR4GfG" },
  { "name": "PUMAS", "league": "México", "url": "https://lh3.googleusercontent.com/d/1HJNz60f1pGydK3LPtQm0bi0VDsTpr29v" },
  { "name": "QATAR", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/145zPxoVsIsg4dbincBWpOcLSzblCd_p5" },
  { "name": "QUERÉTARO", "league": "México", "url": "https://lh3.googleusercontent.com/d/15a9J3eQSjFMhccYXwbzhN0QXoZAXcXo4" },
  { "name": "RACING CLUB", "league": "Argentina", "url": "https://lh3.googleusercontent.com/d/11qwnIbrb5W80Jf197wTZpt0Ud8_DTHhO" },
  { "name": "RACING MONTEVIDEO", "league": "Uruguay", "url": "https://lh3.googleusercontent.com/d/1547TMVydlkAyyPHcqmEoMkzLea3hXqpg" },
  { "name": "RACING SANTANDER", "league": "España", "url": "https://lh3.googleusercontent.com/d/1F5q2dmV3ZfFkSXo_KEkXvzb9uY3HonaZ" },
  { "name": "RACING STRASBOURG", "league": "Francia", "url": "https://lh3.googleusercontent.com/d/1mL8vv35f66-Msaexi6W1QU8nvU53wg_a" },
  { "name": "RAMPLA JUNIORS", "league": "Uruguay", "url": "https://lh3.googleusercontent.com/d/1-UXAHUGqkDm5_V-cOIvPeZgnoiD-34js" },
  { "name": "RAYO VALLECANO", "league": "España", "url": "https://lh3.googleusercontent.com/d/1ItM1IL1wx5E6srQW_4XvPvmudaR1Nz88" },
  { "name": "RAYO ZULIANO", "league": "Venezuela", "url": "https://lh3.googleusercontent.com/d/1RRpOSrjfJ6TsUYkQds-fbpYTyaVsvQ-1" },
  { "name": "RB LEIPZIG", "league": "Alemania", "url": "https://lh3.googleusercontent.com/d/1NjnG92ATlq5NFaRMq5cXZg2kSzP1REYy" },
  { "name": "RB SALZBURG", "league": "Resto del mundo", "url": "https://lh3.googleusercontent.com/d/1fSEyNKOeBxaw4EawbogZaQ2HM09K-CnN" },
  { "name": "REAL BETIS", "league": "España", "url": "https://lh3.googleusercontent.com/d/18WmKgSGJqzYNgdjDLjEfRlGRA9l1mEjd" },
  { "name": "REAL MADRID", "league": "España", "url": "https://lh3.googleusercontent.com/d/1eiKGshrgJBRskvjCvqJL8B6Olud2-eaU" },
  { "name": "REAL SALT LAKE", "league": "MLS", "url": "https://lh3.googleusercontent.com/d/1hfWSskfdiqMUvlubz7_p6pkb2HqwfCwB" },
  { "name": "REAL SANTA CRUZ", "league": "Bolivia", "url": "https://lh3.googleusercontent.com/d/14H35Sx3L_m431bpoE7Jkkn_NueEs6S3p" },
  { "name": "REAL SOCIEDAD", "league": "España", "url": "https://lh3.googleusercontent.com/d/1GBj3JtY6fTrCKa5-ue0RGR6tA_KCc0q7" },
  { "name": "REAL TOMAYAPO", "league": "Bolivia", "url": "https://lh3.googleusercontent.com/d/1lqg2A83jX_ianaeKpceQG_w8nsYfhodf" },
  { "name": "REAL VALLADOLID", "league": "España", "url": "https://lh3.googleusercontent.com/d/1eAAd1BmdZ3wOlXdPa4Pl9wHuRjCcp8a_" },
  { "name": "RECOLETA FC", "league": "Paraguay", "url": "https://lh3.googleusercontent.com/d/1ncQDqKLTdLzbgNhNZy_kFWxUUuPdlxq8" },
  { "name": "REIMS", "league": "Francia", "url": "https://lh3.googleusercontent.com/d/1fX0FD1fGY6aW_m9pYYong_5RTU6Fcr5S" },
  { "name": "REMO", "league": "Brasil", "url": "https://lh3.googleusercontent.com/d/1VwdYO0_JVimqbEnxDQ6SVD-_fyZrEgjE" },
  { "name": "RENNES", "league": "Francia", "url": "https://lh3.googleusercontent.com/d/1Yzl-rpdYS0q3l98FgKEqXJLqH9jiVN5T" },
  { "name": "RIESTRA", "league": "Argentina", "url": "https://lh3.googleusercontent.com/d/1GlvkE-c4ZFh47i-k6XnxlIOCcl8GRfs0" },
  { "name": "RIVER", "league": "Argentina", "url": "https://lh3.googleusercontent.com/d/18myKy-VGx536qrtZiWemSEifsIkpl0k2" },
  { "name": "RIVER PLATE", "league": "Uruguay", "url": "https://lh3.googleusercontent.com/d/1v4eBfMFDv0nXXHRxHAAjY77neuQJ6QRB" },
  { "name": "ROMA", "league": "Italia", "url": "https://lh3.googleusercontent.com/d/1DA5fIma3-c4YSPh9i33uQPspgtn_RKs3" },
  { "name": "ROSARIO CENTRAL", "league": "Argentina", "url": "https://lh3.googleusercontent.com/d/1zkNB74J7SP0vtEFlBYTtm-YEyMSkJ-ta" },
  { "name": "ROYAL PARI", "league": "Bolivia", "url": "https://lh3.googleusercontent.com/d/1ht-7IPzGFKE-JRV5F69lCYqMTlTjjqpt" },
  { "name": "RUBIO ÑU", "league": "Paraguay", "url": "https://lh3.googleusercontent.com/d/1y7rio9v3RcT0uvzNefWc867JcONnEgVV" },
  { "name": "SAINT ÉTIENNE", "league": "Francia", "url": "https://lh3.googleusercontent.com/d/17t8Hcu8y7p_nAwbCla3X_P-D3g52H6H2" },
  { "name": "SAN ANTONIO BULO BULO", "league": "Bolivia", "url": "https://lh3.googleusercontent.com/d/1O4fl1bfIghcWs5YOex9fyxSvpMu8YBgd" },
  { "name": "SAN JOSE EARTHQUAKES", "league": "MLS", "url": "https://lh3.googleusercontent.com/d/1kGyqEq60XR_sYHmbnXg3iV5YyfrvVCDS" },
  { "name": "SAN JOSÉ ORURO", "league": "Bolivia", "url": "https://lh3.googleusercontent.com/d/1_q13XMFtS_048o8BZKkuOs8qubdS46QJ" },
  { "name": "SAN LORENZO", "league": "Argentina", "url": "https://lh3.googleusercontent.com/d/1-bVGYbtAOudQOygYoEG9QT7N4HUltKy7" },
  { "name": "SAN LORENZO (P)", "league": "Paraguay", "url": "https://lh3.googleusercontent.com/d/1UsxHHxCQQhW_ezIoO9D4pJ1j3-ZY8pH4" },
  { "name": "SAN MARTÍN (SJ)", "league": "Argentina", "url": "https://lh3.googleusercontent.com/d/1xBX75pYZRufJ9x7NYD61c8FRDO86p35q" },
  { "name": "SAND DIEGO FC", "league": "MLS", "url": "https://lh3.googleusercontent.com/d/1ETCNlP0NbbzNn43zwAUoPSAtIA6wOJzo" },
  { "name": "SANTOS", "league": "Brasil", "url": "https://lh3.googleusercontent.com/d/1HJnOjTY978CVNq-ltaSdAsx2swUXO3xj" },
  { "name": "SANTOS LAGUNA", "league": "México", "url": "https://lh3.googleusercontent.com/d/15LXAKWEEdJ_Mvz0F-CLavoHnlhGxylLK" },
  { "name": "SAO PAULO", "league": "Brasil", "url": "https://lh3.googleusercontent.com/d/1PtoMl3TNUts4brEySNDIVV7M8XpEnGj9" },
  { "name": "SARMIENTO", "league": "Argentina", "url": "https://lh3.googleusercontent.com/d/1RMctzMgyhblJf7_v1IpEuiBAjGcqO13P" },
  { "name": "SASSUOLO", "league": "Italia", "url": "https://lh3.googleusercontent.com/d/1_EjQxiiDz7qLpZvqPveBQkEKEmL8SsOm" },
  { "name": "SCHALKE 04", "league": "Alemania", "url": "https://lh3.googleusercontent.com/d/1hXYczTQK-3SYBqUhOp2cyx_2pjSFSZr3" },
  { "name": "SEATTLE SOUNDERS", "league": "MLS", "url": "https://lh3.googleusercontent.com/d/1DMBmVStQ8LEzogd6vY9PGv7uAJnHq6Sm" },
  { "name": "SENEGAL", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/1u9M8rniS6pyrwaET6a-7Y5CEi0A0xW1m" },
  { "name": "SERBIA", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/1hhxOUc2YZ2UtAFRhhgJKpEwDd2xOnQj8" },
  { "name": "SEVILLA", "league": "España", "url": "https://lh3.googleusercontent.com/d/18Wks5v-n-WqmGKRWZHkEEMalKZYXvB0j" },
  { "name": "SOL DE AMÉRICA", "league": "Paraguay", "url": "https://lh3.googleusercontent.com/d/1KlEVS528FImsvCc9sHsSDjm4lVfJ7JP5" },
  { "name": "SORRENTO", "league": "Italia", "url": "https://lh3.googleusercontent.com/d/1utaYqZtEFpJuV2PkBeS1RSoxtIhgRSiu" },
  { "name": "SOUTHAMPTON", "league": "Inglaterra", "url": "https://lh3.googleusercontent.com/d/1ABsR6BOnuQpSCuvugWULeQDWEg1ZdLka" },
  { "name": "SPORT BOYS", "league": "Perú", "url": "https://lh3.googleusercontent.com/d/1v1cy9tQqFrGe43PgWBrAUew9bD2ErTgd" },
  { "name": "SPORT HUANCAYO", "league": "Perú", "url": "https://lh3.googleusercontent.com/d/1hSGyAjpJ6FMju4bfw1llOETJAUrIe5X2" },
  { "name": "SPORTING CRISTAL", "league": "Perú", "url": "https://lh3.googleusercontent.com/d/16dOKOtPe8O3wtS7xh97lMWtjmSjWVfqX" },
  { "name": "SPORTING LISBOA", "league": "Portugal", "url": "https://lh3.googleusercontent.com/d/1q22qBvgyO1gzFx28WADvSbdnXhMElaHG" },
  { "name": "SPORTIVO AMELIANO", "league": "Paraguay", "url": "https://lh3.googleusercontent.com/d/12gmWAGftbgIbvCBBpY_FU8LVVnhLcnzH" },
  { "name": "SPORTIVO LUQUEÑO", "league": "Paraguay", "url": "https://lh3.googleusercontent.com/d/16y1PYoSAbyow-wUZ733RuFx-b8bxrehU" },
  { "name": "SPORTIVO TRINIDENSE", "league": "Paraguay", "url": "https://lh3.googleusercontent.com/d/1ZUNmAPFuHbL8u-7BjGup7BfXqhFk_rks" },
  { "name": "ST. LOUIS CITY", "league": "MLS", "url": "https://lh3.googleusercontent.com/d/1TkfmU2Q1i7077KB5_5qOuew5EEj2LRtJ" },
  { "name": "ST. PAULI", "league": "Alemania", "url": "https://lh3.googleusercontent.com/d/1xgWTbaOAkmXYvUjbgro2sd_2VcfxDTQl" },
  { "name": "STUTTGART", "league": "Alemania", "url": "https://lh3.googleusercontent.com/d/1rIyLJHJs2xMJFZccs6UKOtJfhtFW3Va1" },
  { "name": "SUDÁFRICA", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/14IAYx5JhWReFlxqW6EhYyLvQfv9U3dPN" },
  { "name": "SUECIA", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/1ss0gL0IN-yXixK42EIL663VtIPpK59m-" },
  { "name": "SUIZA", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/1AT6ri-ew-23T8DKma7uVGt8EPNp9k-Yr" },
  { "name": "SUNDERLAND", "league": "Inglaterra", "url": "https://lh3.googleusercontent.com/d/1J5gjcWR3CZWx0RFcGHBvA0456ufbMH5_" },
  { "name": "SV 07 ELVERSBERG", "league": "Alemania", "url": "https://lh3.googleusercontent.com/d/1tnE_id21QS8O96mKLEMkAvkKfhcRUG9r" },
  { "name": "TALLERES (C)", "league": "Argentina", "url": "https://lh3.googleusercontent.com/d/1Si-ROayWY8rE35_BNsFOQJBPbeGA6qK8" },
  { "name": "TÉCNICO UNIVERSITARIO", "league": "Ecuador", "url": "https://lh3.googleusercontent.com/d/1OD-_G3l-kAgCPvlk75pSGuryIy1kNmUs" },
  { "name": "TEMBETARY", "league": "Paraguay", "url": "https://lh3.googleusercontent.com/d/1Z2JBO3DNett3zMhheAjScK7QYKKnipVq" },
  { "name": "THE STRONGEST", "league": "Bolivia", "url": "https://lh3.googleusercontent.com/d/1BLbzGPU68SfXhq8PVctxRkTKJA5CY8Ph" },
  { "name": "TIGRE", "league": "Argentina", "url": "https://lh3.googleusercontent.com/d/1R7Xh9y9L1zIH3gKwgVeNAmA9EEFsUB87" },
  { "name": "TIGRES", "league": "México", "url": "https://lh3.googleusercontent.com/d/1trzh7MoNEHlCSf6KSUNTm3kKkt7tEClF" },
  { "name": "TIJUANA", "league": "México", "url": "https://lh3.googleusercontent.com/d/14ncE7hMSxWWcNMSCOZP1y8vjjsOYk4jz" },
  { "name": "TOLUCA", "league": "México", "url": "https://lh3.googleusercontent.com/d/1ZqqNx_Sc4zUmt--AKpAlyjWDd4C0V2Wb" },
  { "name": "TORINO", "league": "Italia", "url": "https://lh3.googleusercontent.com/d/1riyHyuifFkL31IRlicKGKcpKj4MosU2n" },
  { "name": "TORONTO FC", "league": "MLS", "url": "https://lh3.googleusercontent.com/d/1oxrSWpf_pdtPAawdSlNeq6ayfsR9GZ0T" },
  { "name": "TOTTENHAM", "league": "Inglaterra", "url": "https://lh3.googleusercontent.com/d/1sZXWu_ENRWKJnE2UvSGeriUCIAewD0t3" },
  { "name": "TOULOUSE", "league": "Francia", "url": "https://lh3.googleusercontent.com/d/1j9-EI9HZN-OHxdA3CU0ntoDuktLjGUoz" },
  { "name": "TROYES", "league": "Francia", "url": "https://lh3.googleusercontent.com/d/1C-n65Y3HE9lrxTW1lqbgQl5FJTOtubLn" },
  { "name": "TÚNEZ", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/1cPw_FCHpKKciFO-Z4GYFwawBOjupav-g" },
  { "name": "U DE CONCEPCIÓN", "league": "Chile", "url": "https://lh3.googleusercontent.com/d/1s-0UWbqhhIXyDD4DOvwlrJJyrKNwSSht" },
  { "name": "UCRANIA", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/1B_3SYNXexvZQvtXPf8LoZ2X0K9wsSt1D" },
  { "name": "UDINESE", "league": "Italia", "url": "https://lh3.googleusercontent.com/d/1BPNyx21KlK1VXbLoltjuXuU3xEuoYdeu" },
  { "name": "ULSAN HD", "league": "Resto del mundo", "url": "https://lh3.googleusercontent.com/d/1_imWgagRNB7tbzoDbIN5DgpqpaMkVQum" },
  { "name": "UNIÓN", "league": "Argentina", "url": "https://lh3.googleusercontent.com/d/18WyrzpWFAaKQthksmoeb3WYrkvzxlvu9" },
  { "name": "UNION BERLIN", "league": "Alemania", "url": "https://lh3.googleusercontent.com/d/1oo-cCOaIfqmapcyGih2YK7A-bLG5kxCk" },
  { "name": "UNIÓN ESPAÑOLA", "league": "Chile", "url": "https://lh3.googleusercontent.com/d/1jiarOS_kXsTwjk9CJh7jSS5Ypw2ew6kK" },
  { "name": "UNIÓN LA CALERA", "league": "Chile", "url": "https://lh3.googleusercontent.com/d/1KTHw37_DqDKXK8uSuzavYkYGmgGOe3XZ" },
  { "name": "Universidad CATÓLICA", "league": "Chile", "url": "https://lh3.googleusercontent.com/d/1SKb5JvytqgHzvOYxdNCBISphOwnPHmoP" },
  { "name": "UNIVERSIDAD CATÓLICA", "league": "Ecuador", "url": "https://lh3.googleusercontent.com/d/1_NMAsPluPsiIrYhjM8RFb6oyRs8vbkJb" },
  { "name": "UNIVERSIDAD CENTRAL", "league": "Venezuela", "url": "https://lh3.googleusercontent.com/d/16DjsLCfTJascNSp71r0Z9N3lLx4DMdHr" },
  { "name": "Universidad DE CHILE", "league": "Chile", "url": "https://lh3.googleusercontent.com/d/1XjoJ9jLrO6JvMUpYwcGz4cflx7NI4yEk" },
  { "name": "UNIVERSITARIO", "league": "Perú", "url": "https://lh3.googleusercontent.com/d/1IvwLcVi9qZd-uzhI-FR1D6PwQKQCNbeA" },
  { "name": "UNIVERSITARIO DE VINTO", "league": "Bolivia", "url": "https://lh3.googleusercontent.com/d/1kXkfVmdNZxAqvUemnwTQGt7UbEarXjsU" },
  { "name": "URAWA RED DIAMONDS", "league": "Resto del mundo", "url": "https://lh3.googleusercontent.com/d/1fqJGKA0OFf1neHFC-ZIsIKjGOzIncwNQ" },
  { "name": "Uruguay", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/1cfGPtzSyJfrBBvUVdBMtamokzM4snwTz" },
  { "name": "UTC CAJAMARCA", "league": "Perú", "url": "https://lh3.googleusercontent.com/d/1PakYta3fI8njWxacpOQ6XmjplKv5TqlR" },
  { "name": "UZBEKISTÁN", "league": "Mundial 2026", "url": "https://lh3.googleusercontent.com/d/1Ev3aXYTIFR8aPNxE8uw6xMNHHdTP0_2e" },
  { "name": "VALENCIA", "league": "España", "url": "https://lh3.googleusercontent.com/d/1zQcVbQN_cMn_IxlqHc1iF6C5oN9qAAcu" },
  { "name": "VASCO DA GAMA", "league": "Brasil", "url": "https://lh3.googleusercontent.com/d/1ILVrNXphGgmHRD-1tzz5Xrl94r84RnH7" },
  { "name": "VÉLEZ", "league": "Argentina", "url": "https://lh3.googleusercontent.com/d/1xFltHyKqKzLnBTen57hknnHqM2yVtsgr" },
  { "name": "VENEZIA", "league": "Italia", "url": "https://lh3.googleusercontent.com/d/1l_A2XBEuD2lbkV5LfKUk4IbJMEPC-EnC" },
  { "name": "VILLAREAL", "league": "España", "url": "https://lh3.googleusercontent.com/d/1t0R7EvMMT1odgCqyIEsEg8Y7S4ESBy-e" },
  { "name": "VITORIA", "league": "Brasil", "url": "https://lh3.googleusercontent.com/d/1DLx-08An3aRrTyDtfdXipM3t7XmK3g42" },
  { "name": "WERDER BREMEN", "league": "Alemania", "url": "https://lh3.googleusercontent.com/d/1TqjUE92xC0yvnLJV8BD3Ng-7h-DSixll" },
  { "name": "WEST HAM", "league": "Inglaterra", "url": "https://lh3.googleusercontent.com/d/1gSy7kdzlwX3H5dUJNCnH4oZtHEMhqpUR" },
  { "name": "WHITECAPS", "league": "MLS", "url": "https://lh3.googleusercontent.com/d/1FgNHnDb_Vg6-rYuBOwfLQcFcJ3cCkPa0" },
  { "name": "WILSTERMANN", "league": "Bolivia", "url": "https://lh3.googleusercontent.com/d/1vMgAickG0DI2EUYDUUnWBDVm6pO4O07F" },
  { "name": "WOLFSBURGO", "league": "Alemania", "url": "https://lh3.googleusercontent.com/d/1tfM3RZEU9XVfkp8bH3TXqE23mVbqcUIt" },
  { "name": "WOLVES", "league": "Inglaterra", "url": "https://lh3.googleusercontent.com/d/128A201pachDxPHyiuIcZxLZn63jdTfMI" },
  { "name": "WYDAD CASABLANCA", "league": "Resto del mundo", "url": "https://lh3.googleusercontent.com/d/1qKrAljQUOH_NiU8_OVXqnVngXs2SoqHv" },
  { "name": "YARACUYANOS", "league": "Venezuela", "url": "https://lh3.googleusercontent.com/d/1YUd6IxOse7xNJnwTXRnRnbDeMi7AXvTX" },
  { "name": "ZAMORA FC", "league": "Venezuela", "url": "https://lh3.googleusercontent.com/d/1KHs8fqOBlbs4lk5xl58DdJsIKNw9dUYd" }
];

// ESTADO GLOBAL
let CUENTA_LOGUEADA = null;
let COMUNIDADES_USUARIO = [];
let COMUNIDAD_ACTIVA = null;
let ES_ADMIN_ACTUAL = false;

let JUGADORES = [];
let PARTIDOS = [];
let TORNEOS = [];

let TORNEO_ACTIVO = null;
let MODO_TORNEO_NUEVO = "LIGA";
let SUBTIPO_MANO_A_MANO = "AMISTOSO";
let EQUIPOS_SELECCIONADOS_CREACION = {};

let REALTIME_CANAL = null;
let ESTILO_PLACA_ACTUAL = "DARK_NEON";
let ULTIMA_DATA_PLACA = null;

function formatearNombre(texto) {
  if (!texto) return '';
  const conectores = ['de', 'del', 'la', 'las', 'los', 'y', 'en'];
  return texto
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(/\s+/)
    .map((palabra, index) => {
      if (index > 0 && conectores.includes(palabra)) return palabra;
      return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    })
    .join(' ');
}

window.cambiarPestana = function(pestana) {
  document.querySelectorAll('.tab-view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));

  const view = document.getElementById('view-' + pestana);
  if (view) view.classList.add('active');
  if (event && event.target) event.target.classList.add('active');

  if (pestana === 'historica') renderizarTablaHistorica();
  if (pestana === 'vitrina') renderizarVitrina();
  if (pestana === 'padron') renderizarPadron();
  if (pestana === 'h2h') renderizarH2H();
};

window.setModoTorneo = function(modo) {
  MODO_TORNEO_NUEVO = modo;
  document.getElementById('btn-mode-liga').className = 'mode-btn' + (modo === 'LIGA' ? ' active' : '');
  document.getElementById('btn-mode-copa').className = 'mode-btn' + (modo === 'COPA' ? ' active' : '');
  document.getElementById('btn-mode-mano').className = 'mode-btn' + (modo === 'MANO_A_MANO' ? ' active' : '');

  document.getElementById('box-opciones-copa').style.display = (modo === 'COPA' ? 'block' : 'none');
  document.getElementById('box-opciones-mano').style.display = (modo === 'MANO_A_MANO' ? 'block' : 'none');

  actualizarVisibilidadTrofeo();
  actualizarSeccionAsignacionEquipos();
};

window.setSubtipoMano = function(subtipo) {
  SUBTIPO_MANO_A_MANO = subtipo;
  document.getElementById('btn-mano-amistoso').className = 'mode-btn' + (subtipo === 'AMISTOSO' ? ' active' : '');
  document.getElementById('btn-mano-final').className = 'mode-btn' + (subtipo === 'FINAL' ? ' active' : '');

  document.getElementById('box-mano-final-ajustes').style.display = (subtipo === 'FINAL' ? 'block' : 'none');
  actualizarVisibilidadTrofeo();
};

function actualizarVisibilidadTrofeo() {
  const boxTrofeo = document.getElementById('box-campo-trofeo');
  if (MODO_TORNEO_NUEVO === 'LIGA' || MODO_TORNEO_NUEVO === 'COPA' || (MODO_TORNEO_NUEVO === 'MANO_A_MANO' && SUBTIPO_MANO_A_MANO === 'FINAL')) {
    boxTrofeo.style.display = 'block';
  } else {
    boxTrofeo.style.display = 'none';
  }
}

window.togglePenalesInputs = function() {
  const isChecked = document.getElementById('check-hubo-penales').checked;
  document.getElementById('box-inputs-penales').style.display = isChecked ? 'block' : 'none';
  if (!isChecked) {
    document.getElementById('p-pen-g1').value = '';
    document.getElementById('p-pen-g2').value = '';
  }
};

window.modificarGol = function(inputId, delta) {
  const input = document.getElementById(inputId);
  if (!input) return;
  let val = parseInt(input.value, 10) || 0;
  val = Math.max(0, val + delta);
  input.value = val;
};

// -------------------------------------------------------------
// GESTIÓN DE SESIÓN, LOGIN Y REGISTRO (CON VALIDACIÓN DEFENSIVA)
// -------------------------------------------------------------
async function inicializar() {
  configurarEventos();

  const savedCuentaId = localStorage.getItem('mundialitos_cuenta_id');
  if (savedCuentaId) {
    try {
      const { data: cuenta, error } = await db.from('cuentas').select('*').eq('id', savedCuentaId).maybeSingle();
      if (error) throw error;
      if (cuenta) {
        CUENTA_LOGUEADA = cuenta;
        await cargarComunidadesUsuario();
        return;
      }
    } catch (err) {
      console.error("Error al recuperar sesión guardada:", err);
    }
  }

  localStorage.removeItem('mundialitos_cuenta_id');
  localStorage.removeItem('mundialitos_comunidad_id');
  document.getElementById('modal-auth-global').style.display = 'flex';
}

window.setModoAuth = function(modo) {
  const btnLogin = document.getElementById('btn-tab-login');
  const btnReg = document.getElementById('btn-tab-registro');
  const formLogin = document.getElementById('form-auth-login');
  const formReg = document.getElementById('form-auth-registro');

  if (modo === 'LOGIN') {
    btnLogin.classList.add('active');
    btnReg.classList.remove('active');
    formLogin.style.display = 'flex';
    formReg.style.display = 'none';
  } else {
    btnReg.classList.add('active');
    btnLogin.classList.remove('active');
    formReg.style.display = 'flex';
    formLogin.style.display = 'none';
  }
};

window.ejecutarLogin = async function(e) {
  e.preventDefault();
  const rawUser = document.getElementById('login-username').value.trim().toLowerCase().replace(/^@/, '');
  const pin = document.getElementById('login-pin').value.trim();

  if (pin.length !== 4 || isNaN(pin)) {
    alert('El PIN debe tener exactamente 4 números.');
    return;
  }

  const username = `@${rawUser}`;

  try {
    const { data: cuenta, error } = await db.from('cuentas').select('*').eq('username', username).maybeSingle();

    if (error) throw error;
    if (!cuenta) {
      alert('No existe ninguna cuenta con ese usuario. Tocá en "Registrarse" para crear una.');
      return;
    }

    if (cuenta.pin_seguridad !== pin) {
      alert('PIN de seguridad incorrecto.');
      return;
    }

    CUENTA_LOGUEADA = cuenta;
    localStorage.setItem('mundialitos_cuenta_id', CUENTA_LOGUEADA.id);
    document.getElementById('modal-auth-global').style.display = 'none';
    await cargarComunidadesUsuario();
  } catch (err) {
    alert('Error al acceder: ' + err.message);
  }
};

window.ejecutarRegistro = async function(e) {
  e.preventDefault();
  const nombre = formatearNombre(document.getElementById('reg-nombre-pila').value);
  let rawUser = document.getElementById('reg-username-nuevo').value.trim().toLowerCase().replace(/^@/, '');
  const pin = document.getElementById('reg-pin-nuevo').value.trim();

  if (rawUser.length > 12) {
    alert('El nombre de usuario no puede superar los 12 caracteres.');
    return;
  }

  if (pin.length !== 4 || isNaN(pin)) {
    alert('El PIN debe ser exactamente de 4 números.');
    return;
  }

  const username = `@${rawUser}`;

  try {
    const { data: existente } = await db.from('cuentas').select('id').eq('username', username).maybeSingle();
    if (existente) {
      alert('Ese nombre de usuario ya está ocupado. Elegí otro distinto.');
      return;
    }

    const { data: nuevaCuenta, error } = await db.from('cuentas').insert([{
      username,
      nombre,
      pin_seguridad: pin
    }]).select().single();

    if (error) throw error;

    CUENTA_LOGUEADA = nuevaCuenta;
    localStorage.setItem('mundialitos_cuenta_id', CUENTA_LOGUEADA.id);
    document.getElementById('modal-auth-global').style.display = 'none';

    document.getElementById('onboarding-saludo').innerText = `Hola ${nuevaCuenta.nombre}, ¿cómo querés arrancar?`;
    document.getElementById('modal-onboarding').style.display = 'flex';
  } catch (err) {
    alert('Error al registrarse: ' + err.message);
  }
};

window.cerrarOnboardingYAbrir = function(tipo) {
  document.getElementById('modal-onboarding').style.display = 'none';
  if (tipo === 'CREAR') abrirModalCrearComunidad();
  else abrirModalUnirseComunidad();
};

window.cerrarSesion = function() {
  if (!confirm('¿Cerrar sesión en este dispositivo?')) return;
  localStorage.removeItem('mundialitos_cuenta_id');
  localStorage.removeItem('mundialitos_comunidad_id');
  location.reload();
};

// -------------------------------------------------------------
// GESTIÓN DE COMUNIDADES Y REALTIME
// -------------------------------------------------------------
async function cargarComunidadesUsuario() {
  if (!CUENTA_LOGUEADA) return;
  document.getElementById('label-usuario-global').innerText = `👤 ${CUENTA_LOGUEADA.username}`;

  try {
    const { data: membresias } = await db.from('miembros_comunidad').select('rol, comunidades(*)').eq('cuenta_id', CUENTA_LOGUEADA.id);

    COMUNIDADES_USUARIO = (membresias || []).filter(m => m.comunidades).map(m => ({
      ...m.comunidades,
      rol: m.rol
    }));

    if (COMUNIDADES_USUARIO.length === 0) {
      document.getElementById('label-comunidad-activa').innerText = 'Sin Comunidad';
      abrirModalCrearComunidad();
      return;
    }

    const savedComId = localStorage.getItem('mundialitos_comunidad_id');
    const encontrada = COMUNIDADES_USUARIO.find(c => c.id === savedComId);
    COMUNIDAD_ACTIVA = encontrada || COMUNIDADES_USUARIO[0];
    localStorage.setItem('mundialitos_comunidad_id', COMUNIDAD_ACTIVA.id);

    ES_ADMIN_ACTUAL = (COMUNIDAD_ACTIVA.rol === 'ADMIN');
    actualizarUIComunidadActiva();
    suscribirRealtimeComunidad();
    await recargarTodo();
  } catch (err) {
    console.error(err);
  }
}

function suscribirRealtimeComunidad() {
  if (REALTIME_CANAL) {
    db.removeChannel(REALTIME_CANAL);
  }

  if (!COMUNIDAD_ACTIVA) return;

  REALTIME_CANAL = db.channel(`realtime-${COMUNIDAD_ACTIVA.id}`)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'partidos', filter: `comunidad_id=eq.${COMUNIDAD_ACTIVA.id}` }, () => {
      recargarTodo();
    })
    .on('postgres_changes', { event: '*', schema: 'public', table: 'torneos', filter: `comunidad_id=eq.${COMUNIDAD_ACTIVA.id}` }, () => {
      recargarTodo();
    })
    .on('postgres_changes', { event: '*', schema: 'public', table: 'miembros_comunidad', filter: `comunidad_id=eq.${COMUNIDAD_ACTIVA.id}` }, () => {
      recargarTodo();
    })
    .subscribe();
}

function actualizarUIComunidadActiva() {
  if (!COMUNIDAD_ACTIVA) return;
  document.getElementById('label-comunidad-activa').innerText = `🌐 ${COMUNIDAD_ACTIVA.nombre}`;
  document.getElementById('subtitulo-comunidad').innerText = `Comunidad: ${COMUNIDAD_ACTIVA.nombre} ${ES_ADMIN_ACTUAL ? '(Admin)' : ''}`;
  document.getElementById('label-pin-invitacion').innerText = COMUNIDAD_ACTIVA.pin_invitacion;

  const listaMenu = document.getElementById('lista-mis-comunidades');
  listaMenu.innerHTML = COMUNIDADES_USUARIO.map(c => `
    <div class="dropdown-com-item ${c.id === COMUNIDAD_ACTIVA.id ? 'active' : ''}" onclick="seleccionarComunidad('${c.id}')">
      <span>${c.nombre}</span>
      <small style="font-size:0.7rem; opacity:0.7;">${c.rol === 'ADMIN' ? '👑 Admin' : '👤 Miembro'}</small>
    </div>
  `).join('');
}

window.compartirInvitacionComunidad = async function() {
  if (!COMUNIDAD_ACTIVA || !CUENTA_LOGUEADA) return;

  const linkApp = window.location.origin;
  const textoCompartir = `🏆 *${CUENTA_LOGUEADA.nombre}* (${CUENTA_LOGUEADA.username}) te invita a unirte a la comunidad *${COMUNIDAD_ACTIVA.nombre}* en Mundialitos.\n\n🔗 Entrá a: ${linkApp}\n🔑 Código PIN de Acceso: *${COMUNIDAD_ACTIVA.pin_invitacion}*`;

  if (navigator.share) {
    try {
      await navigator.share({
        title: `Unite a ${COMUNIDAD_ACTIVA.nombre} en Mundialitos`,
        text: textoCompartir
      });
      return;
    } catch (err) {
      if (err.name !== 'AbortError') console.error(err);
    }
  }

  navigator.clipboard.writeText(textoCompartir);
  alert('¡Mensaje de invitación copiado al portapapeles para enviar por WhatsApp!');
};

window.abandonarComunidadActual = async function() {
  if (!COMUNIDAD_ACTIVA || !CUENTA_LOGUEADA) return;

  const esAdmin = ES_ADMIN_ACTUAL;
  const advertencia = esAdmin 
    ? `⚠️ Sos el Administrador de "${COMUNIDAD_ACTIVA.nombre}". Si abandonás el grupo, se eliminará la comunidad y sus torneos asociados. ¿Deseás continuar?`
    : `¿Seguro que querés salir de la comunidad "${COMUNIDAD_ACTIVA.nombre}"?`;

  if (!confirm(advertencia)) return;

  try {
    if (esAdmin) {
      const { error } = await db.from('comunidades').delete().eq('id', COMUNIDAD_ACTIVA.id);
      if (error) throw error;
    } else {
      const { error } = await db.from('miembros_comunidad').delete().eq('comunidad_id', COMUNIDAD_ACTIVA.id).eq('cuenta_id', CUENTA_LOGUEADA.id);
      if (error) throw error;
    }

    localStorage.removeItem('mundialitos_comunidad_id');
    await cargarComunidadesUsuario();
  } catch (err) {
    alert('Error al salir de la comunidad: ' + err.message);
  }
};

window.toggleMenuComunidades = function() {
  const drop = document.getElementById('dropdown-comunidades');
  drop.style.display = (drop.style.display === 'flex' ? 'none' : 'flex');
};

document.addEventListener('click', (e) => {
  if (!e.target.closest('.community-selector-wrapper')) {
    const drop = document.getElementById('dropdown-comunidades');
    if (drop) drop.style.display = 'none';
  }
});

window.seleccionarComunidad = async function(comId) {
  document.getElementById('dropdown-comunidades').style.display = 'none';
  const sel = COMUNIDADES_USUARIO.find(c => c.id === comId);
  if (!sel || sel.id === COMUNIDAD_ACTIVA.id) return;

  COMUNIDAD_ACTIVA = sel;
  ES_ADMIN_ACTUAL = (COMUNIDAD_ACTIVA.rol === 'ADMIN');
  localStorage.setItem('mundialitos_comunidad_id', COMUNIDAD_ACTIVA.id);
  actualizarUIComunidadActiva();
  suscribirRealtimeComunidad();
  await recargarTodo();
};

window.abrirModalCrearComunidad = function() {
  document.getElementById('dropdown-comunidades').style.display = 'none';
  document.getElementById('nueva-com-nombre').value = '';
  document.getElementById('modal-crear-comunidad').style.display = 'flex';
};

window.cerrarModalCrearComunidad = function() {
  document.getElementById('modal-crear-comunidad').style.display = 'none';
};

window.guardarNuevaComunidad = async function(e) {
  e.preventDefault();
  const nombre = formatearNombre(document.getElementById('nueva-com-nombre').value);
  if (!nombre) return;

  const prefijo = nombre.slice(0, 4).toUpperCase().replace(/[^A-Z]/g, 'COM');
  const numRandom = Math.floor(1000 + Math.random() * 9000);
  const pinInvitacion = `${prefijo}-${numRandom}`;

  try {
    const { data: com, error: errCom } = await db.from('comunidades').insert([{
      nombre,
      pin_invitacion: pinInvitacion,
      admin_cuenta_id: CUENTA_LOGUEADA.id
    }]).select().single();

    if (errCom) throw errCom;

    await db.from('miembros_comunidad').insert([{
      cuenta_id: CUENTA_LOGUEADA.id,
      comunidad_id: com.id,
      rol: 'ADMIN'
    }]);

    cerrarModalCrearComunidad();
    localStorage.setItem('mundialitos_comunidad_id', com.id);
    await cargarComunidadesUsuario();
  } catch (err) {
    alert('Error al crear comunidad: ' + err.message);
  }
};

window.abrirModalUnirseComunidad = function() {
  document.getElementById('dropdown-comunidades').style.display = 'none';
  document.getElementById('unirse-pin-input').value = '';
  document.getElementById('modal-unirse-comunidad').style.display = 'flex';
};

window.cerrarModalUnirseComunidad = function() {
  document.getElementById('modal-unirse-comunidad').style.display = 'none';
};

window.ejecutarUnirseComunidad = async function(e) {
  e.preventDefault();
  const pin = document.getElementById('unirse-pin-input').value.trim().toUpperCase();

  try {
    const { data: com } = await db.from('comunidades').select('*').eq('pin_invitacion', pin).maybeSingle();
    if (!com) {
      alert('No se encontró ninguna comunidad con ese código PIN.');
      return;
    }

    const { error: errMemb } = await db.from('miembros_comunidad').insert([{
      cuenta_id: CUENTA_LOGUEADA.id,
      comunidad_id: com.id,
      rol: 'MIEMBRO'
    }]);

    if (errMemb && !errMemb.message.includes('unique')) throw errMemb;

    cerrarModalUnirseComunidad();
    localStorage.setItem('mundialitos_comunidad_id', com.id);
    await cargarComunidadesUsuario();
  } catch (err) {
    alert('Error al unirse: ' + err.message);
  }
};

// -------------------------------------------------------------
// RECARGA DE DATOS FILTRADOS POR COMUNIDAD
// -------------------------------------------------------------
async function recargarTodo() {
  if (!COMUNIDAD_ACTIVA) return;

  try {
    const { data: mData, error: mErr } = await db
      .from('miembros_comunidad')
      .select('cuenta_id, rol, cuentas:cuenta_id(*)')
      .eq('comunidad_id', COMUNIDAD_ACTIVA.id);

    if (mErr) throw mErr;

    JUGADORES = (mData || []).filter(m => m.cuentas).map(m => ({
      id: m.cuentas.id,
      nombre: formatearNombre(m.cuentas.nombre),
      username: m.cuentas.username,
      rol: m.rol
    }));

    const { data: tData } = await db.from('torneos').select('*').eq('comunidad_id', COMUNIDAD_ACTIVA.id).order('created_at', { ascending: false });
    TORNEOS = (tData || []).map(t => ({ ...t, nombre: formatearNombre(t.nombre) }));

    const { data: pData } = await db.from('partidos').select('*').eq('comunidad_id', COMUNIDAD_ACTIVA.id).order('created_at', { ascending: false });
    PARTIDOS = pData || [];

    actualizarSelectsFiltroJuegos();
    revisarTorneoActivo();
    poblarChecksCrearTorneo();
    poblarSelectsGenerales();
    renderizarPadron();
    renderizarH2H();
  } catch (err) {
    console.error(err);
  }
}

function actualizarSelectsFiltroJuegos() {
  const juegosSet = new Set();
  TORNEOS.forEach(t => { if (t.juego) juegosSet.add(t.juego); });

  const opciones = ['<option value="TODOS">Todos los Juegos</option>'];
  juegosSet.forEach(j => opciones.push(`<option value="${j}">${j}</option>`));

  const fHist = document.getElementById('filtro-juego-historica');
  const fVit = document.getElementById('filtro-juego-palmares');

  if (fHist) fHist.innerHTML = opciones.join('');
  if (fVit) fVit.innerHTML = opciones.join('');
}

function revisarTorneoActivo() {
  const abierto = TORNEOS.find(t => !t.campeon_id);
  
  if (abierto) {
    TORNEO_ACTIVO = abierto;
    document.getElementById('box-crear-torneo').style.display = 'none';
    document.getElementById('box-torneo-activo').style.display = 'block';
    
    document.getElementById('titulo-torneo-activo').innerText = abierto.nombre;
    const esLiga = abierto.formato === 'LIGA';
    const esCopa = abierto.formato === 'COPA';
    const esMano = abierto.formato === 'MANO_A_MANO';

    let badgeTxt = 'LIGA (PUNTOS)';
    if (esCopa) badgeTxt = 'COPA (LLAVES)';
    if (esMano) badgeTxt = abierto.subformato === 'AMISTOSO' ? 'MANO A MANO (AMISTOSO)' : `MANO A MANO (${abierto.subformato})`;

    document.getElementById('badge-tipo-torneo').innerText = badgeTxt;
    document.getElementById('badge-juego-activo').innerText = abierto.juego || 'EA FC 26';
    document.getElementById('subtitulo-torneo-activo').innerText = `Modalidad: ${abierto.subformato || 'Estándar'}`;

    const imgT = document.getElementById('img-trofeo-header');
    const emojiT = document.getElementById('emoji-trofeo-header');
    if (abierto.trofeo_url) {
      imgT.src = abierto.trofeo_url;
      imgT.style.display = 'block';
      if (emojiT) emojiT.style.display = 'none';
    } else {
      imgT.style.display = 'none';
      if (emojiT) emojiT.style.display = 'block';
    }

    const partIds = Array.isArray(abierto.participantes) ? abierto.participantes : [];
    poblarSelectsPartidoActivo(partIds);

    if (esLiga) {
      document.getElementById('vista-torneo-liga').style.display = 'block';
      document.getElementById('vista-torneo-copa').style.display = 'none';
      document.getElementById('box-fase-partido').style.display = 'none';
      document.getElementById('box-penales-toggle').style.display = 'none';
      renderizarTablaJornada();
    } else {
      document.getElementById('vista-torneo-liga').style.display = 'none';
      document.getElementById('vista-torneo-copa').style.display = 'block';
      document.getElementById('box-fase-partido').style.display = 'block';
      avanzarCronogramaCompetencia();
      renderizarLlavesCompetencia();
    }
  } else {
    TORNEO_ACTIVO = null;
    document.getElementById('box-crear-torneo').style.display = 'block';
    document.getElementById('box-torneo-activo').style.display = 'none';
  }
}

function obtenerEscudoJugador(jugadorId, torneoObj = TORNEO_ACTIVO) {
  if (!torneoObj || !torneoObj.equipos_participantes) return null;
  const eqData = torneoObj.equipos_participantes[jugadorId];
  return eqData ? eqData.url : null;
}

function obtenerNombreEquipoJugador(jugadorId, torneoObj = TORNEO_ACTIVO) {
  if (!torneoObj || !torneoObj.equipos_participantes) return '';
  const eqData = torneoObj.equipos_participantes[jugadorId];
  return eqData ? formatearNombre(eqData.name) : '';
}

window.actualizarEscudoMatchup = function() {
  const j1 = document.getElementById('p-j1').value;
  const j2 = document.getElementById('p-j2').value;
  const img1 = document.getElementById('escudo-preview-j1');
  const img2 = document.getElementById('escudo-preview-j2');

  const esc1 = obtenerEscudoJugador(j1);
  const esc2 = obtenerEscudoJugador(j2);

  if (esc1) { img1.src = esc1; img1.style.display = 'inline-block'; } else { img1.style.display = 'none'; }
  if (esc2) { img2.src = esc2; img2.style.display = 'inline-block'; } else { img2.style.display = 'none'; }
};

function resolverGanadorPartidoUnico(p) {
  if (!p) return null;
  if (p.penales_g1 !== null && p.penales_g2 !== null && p.penales_g1 !== undefined && p.penales_g2 !== undefined) {
    return p.penales_g1 > p.penales_g2 ? p.jugador1_id : p.jugador2_id;
  }
  if (p.penales_ganador_id) return p.penales_ganador_id;
  if (p.goles1 > p.goles2) return p.jugador1_id;
  if (p.goles2 > p.goles1) return p.jugador2_id;
  return null;
}

function resolverGanadorSerie(pIda, pVta) {
  if (!pIda || !pVta) return null;
  const golesJ1 = pIda.goles1 + pVta.goles2;
  const golesJ2 = pIda.goles2 + pVta.goles1;

  if (golesJ1 > golesJ2) return pIda.jugador1_id;
  if (golesJ2 > golesJ1) return pIda.jugador2_id;
  return resolverGanadorPartidoUnico(pVta);
}

function avanzarCronogramaCompetencia() {
  if (!TORNEO_ACTIVO) return;

  const partIds = Array.isArray(TORNEO_ACTIVO.participantes) ? TORNEO_ACTIVO.participantes : [];
  const partidosDeHoy = PARTIDOS.filter(p => p.torneo_id === TORNEO_ACTIVO.id).reverse();
  const fInput = document.getElementById('p-fase');
  const fTexto = document.getElementById('p-fase-texto');
  const sJ1 = document.getElementById('p-j1');
  const sJ2 = document.getElementById('p-j2');
  const boxPen = document.getElementById('box-penales-toggle');

  const j1_id = partIds[0] || '';
  const j2_id = partIds[1] || '';

  if (TORNEO_ACTIVO.formato === 'MANO_A_MANO') {
    const sub = TORNEO_ACTIVO.subformato;

    if (sub === 'AMISTOSO' || sub === 'UNICO') {
      fInput.value = 'FINAL';
      fTexto.value = sub === 'AMISTOSO' ? '🤝 Duelo Amistoso' : '👑 Gran Final Mano a Mano';
      sJ1.value = j1_id;
      sJ2.value = j2_id;
      boxPen.style.display = 'block';
      actualizarEscudoMatchup();
      return;
    }

    if (sub === 'IDA_VUELTA') {
      const pIda = partidosDeHoy.find(p => p.fase === 'FINAL_IDA');
      const pVta = partidosDeHoy.find(p => p.fase === 'FINAL_VUELTA');

      if (!pIda) {
        fInput.value = 'FINAL_IDA';
        fTexto.value = '⚽ Final Mano a Mano (Partido de Ida)';
        sJ1.value = j1_id;
        sJ2.value = j2_id;
        boxPen.style.display = 'none';
        actualizarEscudoMatchup();
        return;
      }
      if (!pVta) {
        fInput.value = 'FINAL_VUELTA';
        fTexto.value = '⚡ Final Mano a Mano (Partido de Vuelta / Definición)';
        sJ1.value = pIda.jugador2_id;
        sJ2.value = pIda.jugador1_id;
        boxPen.style.display = 'block';
        actualizarEscudoMatchup();
        return;
      }
      fTexto.value = '🏁 Serie Ida y Vuelta Completada';
      boxPen.style.display = 'none';
      return;
    }

    if (sub === 'MEJOR_DE_3' || sub === 'MEJOR_DE_5') {
      const maxWins = sub === 'MEJOR_DE_3' ? 2 : 3;
      let winsJ1 = 0;
      let winsJ2 = 0;

      partidosDeHoy.forEach(p => {
        const winId = resolverGanadorPartidoUnico(p);
        if (winId === j1_id) winsJ1++;
        if (winId === j2_id) winsJ2++;
      });

      if (winsJ1 >= maxWins || winsJ2 >= maxWins) {
        fTexto.value = `🏁 Serie Definida (${winsJ1 >= maxWins ? JUGADORES.find(j=>j.id===j1_id)?.nombre : JUGADORES.find(j=>j.id===j2_id)?.nombre} Campeón)`;
        boxPen.style.display = 'none';
        return;
      }

      const numMatch = partidosDeHoy.length + 1;
      fInput.value = `MATCH_${numMatch}`;
      fTexto.value = `🎮 Partido #${numMatch} (${sub.replace(/_/g, ' ')}) — Marcador: ${winsJ1} a ${winsJ2}`;
      
      if (numMatch % 2 === 1) {
        sJ1.value = j1_id; sJ2.value = j2_id;
      } else {
        sJ1.value = j2_id; sJ2.value = j1_id;
      }
      boxPen.style.display = 'block';
      actualizarEscudoMatchup();
      return;
    }
  }

  const esIdaVuelta = TORNEO_ACTIVO.subformato === 'IDA_VUELTA';
  const rondaInicio = TORNEO_ACTIVO.ronda_inicio || 'SEMIS';

  const fasesOrden = ['OCTAVOS', 'CUARTOS', 'SEMIS', 'FINAL'];
  const cantCrucesFase = { 'OCTAVOS': 8, 'CUARTOS': 4, 'SEMIS': 2, 'FINAL': 1 };
  const titulosFase = { 'OCTAVOS': 'Octavos de Final', 'CUARTOS': 'Cuartos de Final', 'SEMIS': 'Semifinales', 'FINAL': 'Gran Final' };

  let idxActual = fasesOrden.indexOf(rondaInicio);
  if (idxActual === -1) idxActual = 2;

  let jugadoresRondaActual = [...partIds];

  for (let f = idxActual; f < fasesOrden.length; f++) {
    const faseNombre = fasesOrden[f];
    const numCruces = cantCrucesFase[faseNombre];

    if (faseNombre === 'FINAL') {
      const pFinal = partidosDeHoy.find(p => p.fase === 'FINAL');
      if (!pFinal) {
        fInput.value = 'FINAL';
        fTexto.value = '👑 GRAN FINAL DE LA COPA';
        if (jugadoresRondaActual.length >= 2) {
          sJ1.value = jugadoresRondaActual[0];
          sJ2.value = jugadoresRondaActual[1];
        }
        boxPen.style.display = 'block';
        actualizarEscudoMatchup();
        return;
      }
      fTexto.value = '🏁 Torneo Completado (Listo para Finalizar)';
      boxPen.style.display = 'none';
      return;
    }

    const idasJugadas = [];
    const vueltasJugadas = [];
    const ganadoresEstaFase = [];

    for (let c = 1; c <= numCruces; c++) {
      const tagIda = esIdaVuelta ? `${faseNombre}_IDA_${c}` : `${faseNombre}_${c}`;
      const pIda = partidosDeHoy.find(p => p.fase === tagIda || p.fase === `${faseNombre}_IDA_${c}`);
      if (!pIda) {
        fInput.value = tagIda;
        fTexto.value = `⚽ ${titulosFase[faseNombre]} — Cruce ${c} ${esIdaVuelta ? '(Ida)' : ''}`;
        const j1Index = (c - 1) * 2;
        const j2Index = j1Index + 1;
        if (jugadoresRondaActual[j1Index] && jugadoresRondaActual[j2Index]) {
          sJ1.value = jugadoresRondaActual[j1Index];
          sJ2.value = jugadoresRondaActual[j2Index];
        }
        boxPen.style.display = esIdaVuelta ? 'none' : 'block';
        actualizarEscudoMatchup();
        return;
      }
      idasJugadas.push(pIda);
    }

    if (esIdaVuelta) {
      for (let c = 1; c <= numCruces; c++) {
        const tagVta = `${faseNombre}_VUELTA_${c}`;
        const pVta = partidosDeHoy.find(p => p.fase === tagVta);
        if (!pVta) {
          const pIda = idasJugadas[c - 1];
          fInput.value = tagVta;
          fTexto.value = `⚡ ${titulosFase[faseNombre]} — Cruce ${c} (Vuelta)`;
          sJ1.value = pIda.jugador2_id;
          sJ2.value = pIda.jugador1_id;
          boxPen.style.display = 'block';
          actualizarEscudoMatchup();
          return;
        }
        vueltasJugadas.push(pVta);
      }
    }

    for (let c = 0; c < numCruces; c++) {
      const ganador = esIdaVuelta 
        ? resolverGanadorSerie(idasJugadas[c], vueltasJugadas[c])
        : resolverGanadorPartidoUnico(idasJugadas[c]);
      if (ganador) ganadoresEstaFase.push(ganador);
    }

    jugadoresRondaActual = ganadoresEstaFase;
  }
}

function poblarChecksCrearTorneo() {
  const container = document.getElementById('lista-check-jugadores');
  container.innerHTML = JUGADORES.map(j => `
    <label class="checkbox-item">
      <input type="checkbox" name="participantes_check" value="${j.id}" onchange="actualizarSeccionAsignacionEquipos()">
      ${j.nombre}
    </label>
  `).join('');
  actualizarSeccionAsignacionEquipos();
}

window.actualizarSeccionAsignacionEquipos = function() {
  const checked = Array.from(document.querySelectorAll('input[name="participantes_check"]:checked'));
  const boxEquipos = document.getElementById('box-seleccion-equipos');
  const listaInputs = document.getElementById('lista-inputs-equipos');

  if (checked.length === 0) {
    boxEquipos.style.display = 'none';
    return;
  }

  boxEquipos.style.display = 'block';

  listaInputs.innerHTML = checked.map((c, idx) => {
    const jugador = JUGADORES.find(j => j.id === c.value);
    const defaultClub = BASE_CLUBES[idx % BASE_CLUBES.length];

    if (!EQUIPOS_SELECCIONADOS_CREACION[c.value]) {
      EQUIPOS_SELECCIONADOS_CREACION[c.value] = defaultClub;
    }

    const clubActual = EQUIPOS_SELECCIONADOS_CREACION[c.value];

    return `
      <div class="club-select-row">
        <strong style="min-width:65px; font-size:0.8rem;">${jugador ? jugador.nombre : 'J'}:</strong>
        <img id="preview-escudo-input-${c.value}" src="${clubActual.url}" class="club-badge-micro">
        <div class="input-dropdown-wrapper">
          <input type="text" id="input-buscar-club-${c.value}" class="club-input-search" value="${formatearNombre(clubActual.name)}" 
                 placeholder="Escribí para buscar club..." autocomplete="off"
                 oninput="filtrarDropdownClubes('${c.value}', this.value)" 
                 onfocus="filtrarDropdownClubes('${c.value}', this.value)">
          <div id="dropdown-clubes-${c.value}" class="club-dropdown-floating"></div>
        </div>
      </div>
    `;
  }).join('');
};

// -------------------------------------------------------------
// BÚSQUEDA DE CLUBES CON PRIORIDAD PARA SELECCIONES NACIONALES
// -------------------------------------------------------------
window.filtrarDropdownClubes = function(jId, query) {
  const drop = document.getElementById(`dropdown-clubes-${jId}`);
  const qNorm = normalizarTxt(query);

  let coincidencias = BASE_CLUBES.filter(c => normalizarTxt(c.name).includes(qNorm) || normalizarTxt(c.league).includes(qNorm));

  if (coincidencias.length === 0) {
    drop.innerHTML = '<div style="padding:10px 14px; font-size:0.78rem; color:var(--text-muted); text-align:center;">Sin coincidencias (nombre personalizado)</div>';
    drop.style.display = 'flex';
    EQUIPOS_SELECCIONADOS_CREACION[jId] = { name: formatearNombre(query), url: '' };
    return;
  }

  coincidencias.sort((a, b) => {
    const aName = normalizarTxt(a.name);
    const bName = normalizarTxt(b.name);
    const aEsSeleccion = a.league === "Mundial 2026";
    const bEsSeleccion = b.league === "Mundial 2026";

    if (aName === qNorm && bName !== qNorm) return -1;
    if (bName === qNorm && aName !== qNorm) return 1;

    if (aEsSeleccion && !bEsSeleccion) return -1;
    if (!aEsSeleccion && bEsSeleccion) return 1;

    const aEmpieza = aName.startsWith(qNorm);
    const bEmpieza = bName.startsWith(qNorm);
    if (aEmpieza && !bEmpieza) return -1;
    if (!aEmpieza && bEmpieza) return 1;

    return a.name.localeCompare(b.name);
  });

  coincidencias = coincidencias.slice(0, 20);

  drop.innerHTML = coincidencias.map(c => `
    <div class="club-dropdown-item" onclick="seleccionarClubParaJugador('${jId}', '${c.name.replace(/'/g, "\\'")}', '${c.url}')">
      <img src="${c.url}" alt="${c.name}" onerror="this.style.display='none'">
      <div class="club-dropdown-info">
        <span>${formatearNombre(c.name)}</span>
        <small>${formatearNombre(c.league)}</small>
      </div>
    </div>
  `).join('');

  drop.style.display = 'flex';
};

window.seleccionarClubParaJugador = function(jId, name, url) {
  document.getElementById(`input-buscar-club-${jId}`).value = formatearNombre(name);
  const img = document.getElementById(`preview-escudo-input-${jId}`);
  if (img) {
    img.src = url;
    img.style.display = url ? 'inline-block' : 'none';
  }
  document.getElementById(`dropdown-clubes-${jId}`).style.display = 'none';
  EQUIPOS_SELECCIONADOS_CREACION[jId] = { name: formatearNombre(name), url };
};

document.addEventListener('click', (e) => {
  if (!e.target.closest('.club-select-row')) {
    document.querySelectorAll('.club-dropdown-floating').forEach(d => d.style.display = 'none');
  }
});

function normalizarTxt(t) {
  return (t || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}

function poblarSelectsPartidoActivo(participantesIds) {
  const pool = JUGADORES.filter(j => participantesIds.length === 0 || participantesIds.includes(j.id));
  const s1 = document.getElementById('p-j1');
  const s2 = document.getElementById('p-j2');

  const options = pool.map(j => `<option value="${j.id}">${j.nombre}</option>`).join('');
  s1.innerHTML = `<option value="">Local</option>` + options;
  s2.innerHTML = `<option value="">Visitante</option>` + options;
  actualizarEscudoMatchup();
}

function poblarSelectsGenerales() {
  const selects = ['h2h-j1', 'h2h-j2'];
  const options = JUGADORES.map(j => `<option value="${j.id}">${j.nombre}</option>`).join('');

  selects.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const valActual = el.value;
    el.innerHTML = `<option value="">Seleccionar</option>` + options;
    if (valActual && JUGADORES.some(j => j.id === valActual)) {
      el.value = valActual;
    }
  });

  const h1 = document.getElementById('h2h-j1');
  const h2 = document.getElementById('h2h-j2');
  if (JUGADORES.length >= 2 && h1 && h2 && (!h1.value || !h2.value || h1.value === h2.value)) {
    h1.selectedIndex = 1;
    h2.selectedIndex = 2;
  }
}

// -------------------------------------------------------------
// CÁLCULO DE ESTADÍSTICAS (PENALES SUMAN VICTORIA)
// -------------------------------------------------------------
function calcularEstadisticas(partidosFiltrados, idsParticipantes = null) {
  const stats = {};
  const pool = idsParticipantes 
    ? JUGADORES.filter(j => idsParticipantes.includes(j.id))
    : JUGADORES;

  pool.forEach(j => {
    stats[j.id] = { id: j.id, nombre: j.nombre, username: j.username, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dif: 0, pts: 0 };
  });

  partidosFiltrados.forEach(p => {
    const s1 = stats[p.jugador1_id];
    const s2 = stats[p.jugador2_id];
    if (!s1 || !s2) return;

    s1.pj++; s2.pj++;
    s1.gf += p.goles1; s1.gc += p.goles2;
    s2.gf += p.goles2; s2.gc += p.goles1;

    const huboPen = (p.penales_g1 !== null && p.penales_g2 !== null && p.penales_g1 !== undefined && p.penales_g2 !== undefined);
    
    if (huboPen) {
      const gPenJ1 = p.penales_g1 > p.penales_g2;
      if (gPenJ1) {
        s1.pg++; s1.pts += 3; s2.pp++;
      } else {
        s2.pg++; s2.pts += 3; s1.pp++;
      }
    } else {
      if (p.goles1 > p.goles2) {
        s1.pg++; s1.pts += 3; s2.pp++;
      } else if (p.goles2 > p.goles1) {
        s2.pg++; s2.pts += 3; s1.pp++;
      } else {
        s1.pe++; s1.pts += 1;
        s2.pe++; s2.pts += 1;
      }
    }
  });

  return Object.values(stats).map(s => {
    s.dif = s.gf - s.gc;
    return s;
  }).sort((a, b) => b.pts - a.pts || b.dif - a.dif || b.gf - a.gf);
}

function renderizarTablaJornada() {
  if (!TORNEO_ACTIVO) return;
  const partidosDeHoy = PARTIDOS.filter(p => p.torneo_id === TORNEO_ACTIVO.id);
  const partIds = Array.isArray(TORNEO_ACTIVO.participantes) ? TORNEO_ACTIVO.participantes : null;
  const ranking = calcularEstadisticas(partidosDeHoy, partIds);

  const tbody = document.getElementById('body-tabla-jornada');
  tbody.innerHTML = ranking.map((r, i) => {
    const esc = obtenerEscudoJugador(r.id);
    const imgHtml = esc ? `<img src="${esc}" class="club-badge-micro" style="margin-right:4px;">` : '';
    const clubNom = obtenerNombreEquipoJugador(r.id);

    return `
      <tr>
        <td>${i + 1}</td>
        <td>
          <div class="player-name-cell">
            ${imgHtml}
            <strong>${r.nombre}</strong>
            <small>(${clubNom})</small>
          </div>
        </td>
        <td>${r.pj}</td><td>${r.pg}</td><td>${r.pe}</td><td>${r.pp}</td>
        <td>${r.gf}</td><td>${r.gc}</td>
        <td>${r.dif > 0 ? '+' + r.dif : r.dif}</td>
        <td style="color:#58a6ff; font-weight:bold;">${r.pts}</td>
      </tr>
    `;
  }).join('');

  renderizarListaPartidosJornada(partidosDeHoy);
}

function renderizarLlavesCompetencia() {
  if (!TORNEO_ACTIVO) return;
  const partidosDeHoy = PARTIDOS.filter(p => p.torneo_id === TORNEO_ACTIVO.id);
  const container = document.getElementById('bracket-container');
  const sub = TORNEO_ACTIVO.subformato;

  if (TORNEO_ACTIVO.formato === 'MANO_A_MANO') {
    const partIds = Array.isArray(TORNEO_ACTIVO.participantes) ? TORNEO_ACTIVO.participantes : [];
    const j1_id = partIds[0];
    const j2_id = partIds[1];
    const j1 = JUGADORES.find(j => j.id === j1_id)?.nombre || 'J1';
    const j2 = JUGADORES.find(j => j.id === j2_id)?.nombre || 'J2';

    const esc1 = obtenerEscudoJugador(j1_id);
    const esc2 = obtenerEscudoJugador(j2_id);
    const img1 = esc1 ? `<img src="${esc1}" class="club-badge-micro" style="margin-right:4px;">` : '';
    const img2 = esc2 ? `<img src="${esc2}" class="club-badge-micro" style="margin-right:4px;">` : '';

    if (sub === 'MEJOR_DE_3' || sub === 'MEJOR_DE_5') {
      let winsJ1 = 0;
      let winsJ2 = 0;
      partidosDeHoy.forEach(p => {
        const w = resolverGanadorPartidoUnico(p);
        if (w === j1_id) winsJ1++;
        if (w === j2_id) winsJ2++;
      });

      container.innerHTML = `
        <div class="bracket-round">
          <h4>Serie ${sub.replace(/_/g, ' ')}</h4>
          <div class="bracket-series finalizada">
            <strong style="color:var(--gold); font-size:0.95rem;">Marcador Global de la Serie</strong>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:6px; font-size:0.95rem;">
              <span>${img1}${j1}</span><b>${winsJ1} Victorias</b>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.95rem;">
              <span>${img2}${j2}</span><b>${winsJ2} Victorias</b>
            </div>
          </div>
        </div>
      `;
      renderizarListaPartidosJornada(partidosDeHoy);
      return;
    }

    if (sub === 'IDA_VUELTA') {
      const pIda = partidosDeHoy.find(p => p.fase === 'FINAL_IDA');
      const pVta = partidosDeHoy.find(p => p.fase === 'FINAL_VUELTA');

      container.innerHTML = `
        <div class="bracket-round">
          <h4>Serie Ida y Vuelta</h4>
          <div class="bracket-series ${pIda && pVta ? 'finalizada' : ''}">
            <strong style="color:var(--gold);">Marcadores</strong>
            ${pIda ? `<p style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">Ida: ${img1}${j1} ${pIda.goles1} - ${pIda.goles2} ${img2}${j2}</p>` : '<p style="font-size:0.75rem; color:var(--text-muted);">Ida pendiente</p>'}
            ${pVta ? `<p style="font-size:0.75rem; color:var(--text-muted);">Vuelta: ${img2}${j2} ${pVta.penales_g1 !== null ? `(${pVta.penales_g1}) ` : ''}${pVta.goles1} - ${pVta.goles2}${pVta.penales_g2 !== null ? ` (${pVta.penales_g2})` : ''} ${img1}${j1}</p>` : '<p style="font-size:0.75rem; color:var(--text-muted);">Vuelta pendiente</p>'}
          </div>
        </div>
      `;
      renderizarListaPartidosJornada(partidosDeHoy);
      return;
    }

    const pFinal = partidosDeHoy.find(p => p.fase === 'FINAL');
    const scoreFinalTxt = pFinal 
      ? `${pFinal.penales_g1 !== null ? `(${pFinal.penales_g1}) ` : ''}${pFinal.goles1} - ${pFinal.goles2}${pFinal.penales_g2 !== null ? ` (${pFinal.penales_g2})` : ''}` 
      : '0 - 0';

    container.innerHTML = `
      <div class="bracket-round">
        <h4>${sub === 'AMISTOSO' ? 'Amistoso Directo' : 'Final Directa'}</h4>
        ${pFinal ? `
          <div class="bracket-series finalizada">
            <strong style="color:var(--gold);">Resultado Final</strong>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:4px;"><span>${img1}${j1}</span><b>${pFinal.goles1}</b></div>
            <div style="display:flex; justify-content:space-between; align-items:center;"><span>${img2}${j2}</span><b>${pFinal.goles2}</b></div>
            ${pFinal.penales_g1 !== null ? `<div style="font-size:0.78rem; color:var(--gold); text-align:center; margin-top:4px; font-weight:bold;">⚡ Definición: ${scoreFinalTxt}</div>` : ''}
          </div>
        ` : '<p style="color:var(--text-muted); font-size:0.75rem; text-align:center;">Pendiente de disputa</p>'}
      </div>
    `;
    renderizarListaPartidosJornada(partidosDeHoy);
    return;
  }

  const esIdaVuelta = TORNEO_ACTIVO.subformato === 'IDA_VUELTA';
  const rondaInicio = TORNEO_ACTIVO.ronda_inicio || 'SEMIS';
  const fasesOrden = ['OCTAVOS', 'CUARTOS', 'SEMIS', 'FINAL'];
  const cantCrucesFase = { 'OCTAVOS': 8, 'CUARTOS': 4, 'SEMIS': 2, 'FINAL': 1 };
  const titulosFase = { 'OCTAVOS': 'Octavos de Final', 'CUARTOS': 'Cuartos de Final', 'SEMIS': 'Semifinales', 'FINAL': 'Gran Final' };

  let idxInicio = fasesOrden.indexOf(rondaInicio);
  if (idxInicio === -1) idxInicio = 2;

  let html = '';
  for (let f = idxInicio; f < fasesOrden.length; f++) {
    const faseNombre = fasesOrden[f];
    const numCruces = cantCrucesFase[faseNombre];

    html += `<div class="bracket-round"><h4>${titulosFase[faseNombre]}</h4>`;

    if (faseNombre === 'FINAL') {
      const pFinal = partidosDeHoy.find(p => p.fase === 'FINAL');
      if (pFinal) {
        const j1 = JUGADORES.find(j => j.id === pFinal.jugador1_id)?.nombre || 'J1';
        const j2 = JUGADORES.find(j => j.id === pFinal.jugador2_id)?.nombre || 'J2';
        const esc1 = obtenerEscudoJugador(pFinal.jugador1_id);
        const esc2 = obtenerEscudoJugador(pFinal.jugador2_id);
        const img1 = esc1 ? `<img src="${esc1}" class="club-badge-micro" style="margin-right:4px;">` : '';
        const img2 = esc2 ? `<img src="${esc2}" class="club-badge-micro" style="margin-right:4px;">` : '';
        const penTxt = pFinal.penales_g1 !== null ? `(${pFinal.penales_g1}) ${pFinal.goles1} - ${pFinal.goles2} (${pFinal.penales_g2})` : `${pFinal.goles1} - ${pFinal.goles2}`;

        html += `
          <div class="bracket-series finalizada">
            <strong style="color:var(--gold);">Final Única</strong>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:4px;"><span>${img1}${j1}</span><b>${pFinal.goles1}</b></div>
            <div style="display:flex; justify-content:space-between; align-items:center;"><span>${img2}${j2}</span><b>${pFinal.goles2}</b></div>
            ${pFinal.penales_g1 !== null ? `<div style="font-size:0.75rem; color:var(--gold); text-align:center; font-weight:bold; margin-top:4px;">⚡ Penales: ${penTxt}</div>` : ''}
          </div>
        `;
      } else {
        html += `<p style="color:var(--text-muted); font-size:0.75rem; text-align:center;">Esperando finalistas</p>`;
      }
    } else {
      for (let c = 1; c <= numCruces; c++) {
        const tagIda = esIdaVuelta ? `${faseNombre}_IDA_${c}` : `${faseNombre}_${c}`;
        const pIda = partidosDeHoy.find(p => p.fase === tagIda || p.fase === `${faseNombre}_IDA_${c}`);
        const pVta = partidosDeHoy.find(p => p.fase === `${faseNombre}_VUELTA_${c}`);

        if (!pIda) {
          html += `<div class="bracket-series"><strong>Cruce ${c}</strong><p style="color:var(--text-muted); font-size:0.75rem;">Pendiente</p></div>`;
          continue;
        }

        const j1 = JUGADORES.find(j => j.id === pIda.jugador1_id)?.nombre || 'J1';
        const j2 = JUGADORES.find(j => j.id === pIda.jugador2_id)?.nombre || 'J2';
        const esc1 = obtenerEscudoJugador(pIda.jugador1_id);
        const esc2 = obtenerEscudoJugador(pIda.jugador2_id);
        const img1 = esc1 ? `<img src="${esc1}" class="club-badge-micro" style="margin-right:4px;">` : '';
        const img2 = esc2 ? `<img src="${esc2}" class="club-badge-micro" style="margin-right:4px;">` : '';

        if (!esIdaVuelta || !pVta) {
          html += `
            <div class="bracket-series ${pIda ? 'finalizada' : ''}">
              <strong style="color:#58a6ff;">Cruce ${c} ${esIdaVuelta ? '(Ida)' : ''}</strong>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-top:4px;"><span>${img1}${j1}</span><b>${pIda.goles1}</b></div>
              <div style="display:flex; justify-content:space-between; align-items:center;"><span>${img2}${j2}</span><b>${pIda.goles2}</b></div>
              ${pIda.penales_g1 !== null ? `<div style="font-size:0.75rem; color:var(--gold); text-align:center; font-weight:bold; margin-top:4px;">⚡ Penales: (${pIda.penales_g1}) ${pIda.goles1} - ${pIda.goles2} (${pIda.penales_g2})</div>` : ''}
            </div>
          `;
        } else {
          const gTot1 = pIda.goles1 + pVta.goles2;
          const gTot2 = pIda.goles2 + pVta.goles1;
          html += `
            <div class="bracket-series finalizada">
              <strong style="color:var(--gold);">Cruce ${c} (Global ${gTot1}-${gTot2})</strong>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-top:4px;"><span>${img1}${j1}</span><b>${gTot1} <small style="color:var(--text-muted);">(${pIda.goles1}+${pVta.goles2})</small></b></div>
              <div style="display:flex; justify-content:space-between; align-items:center;"><span>${img2}${j2}</span><b>${gTot2} <small style="color:var(--text-muted);">(${pIda.goles2}+${pVta.goles1})</small></b></div>
              ${pVta.penales_g1 !== null ? `<div style="font-size:0.75rem; color:var(--gold); text-align:center; font-weight:bold; margin-top:4px;">⚡ Vuelta por Penales: (${pVta.penales_g1}) ${pVta.goles1} - ${pVta.goles2} (${pVta.penales_g2})</div>` : ''}
            </div>
          `;
        }
      }
    }
    html += `</div>`;
  }

  container.innerHTML = html;
  renderizarListaPartidosJornada(partidosDeHoy);
}

function renderizarListaPartidosJornada(partidosDeHoy) {
  const boxHist = document.getElementById('lista-partidos-jornada');
  boxHist.innerHTML = partidosDeHoy.map(p => {
    const j1 = JUGADORES.find(j => j.id === p.jugador1_id);
    const j2 = JUGADORES.find(j => j.id === p.jugador2_id);
    const esc1 = obtenerEscudoJugador(p.jugador1_id);
    const esc2 = obtenerEscudoJugador(p.jugador2_id);
    const img1 = esc1 ? `<img src="${esc1}" class="club-badge-micro" style="margin-right:4px;">` : '';
    const img2 = esc2 ? `<img src="${esc2}" class="club-badge-micro" style="margin-left:4px;">` : '';
    
    let pen = '';
    if (p.penales_g1 !== null && p.penales_g2 !== null && p.penales_g1 !== undefined && p.penales_g2 !== undefined) {
      pen = `<small style="color:var(--gold); margin-left:4px;">(${p.penales_g1}-${p.penales_g2})</small>`;
    }

    const etiqueta = p.fase ? `<span class="tag-badge">${p.fase.replace(/_/g, ' ')}</span>` : '';
    
    let botonesAccion = '';
    if (ES_ADMIN_ACTUAL) {
      botonesAccion = `
        <div style="display:flex; gap:4px;">
          <button class="btn-secondary" style="padding:2px 6px; font-size:0.72rem;" onclick="abrirModalEditarPartido('${p.id}')">✏️</button>
          <button class="btn-danger-sm" style="padding:2px 6px; font-size:0.72rem;" onclick="eliminarPartido('${p.id}')">🗑️</button>
        </div>
      `;
    }

    return `
      <div class="partido-item">
        <span>${etiqueta} ${img1}<strong>${j1 ? j1.nombre : 'J1'}</strong> ${p.goles1} - ${p.goles2} <strong>${j2 ? j2.nombre : 'J2'}</strong>${img2} ${pen}</span>
        ${botonesAccion}
      </div>
    `;
  }).join('');
}

// -------------------------------------------------------------
// EDICIÓN RÁPIDA DE PARTIDOS (SOLO ADMIN)
// -------------------------------------------------------------
window.abrirModalEditarPartido = function(partidoId) {
  if (!ES_ADMIN_ACTUAL) return;
  const p = PARTIDOS.find(item => item.id === partidoId);
  if (!p) return;

  const j1 = JUGADORES.find(j => j.id === p.jugador1_id)?.nombre || 'Local';
  const j2 = JUGADORES.find(j => j.id === p.jugador2_id)?.nombre || 'Visitante';

  document.getElementById('edit-p-id').value = p.id;
  document.getElementById('edit-p-info').innerText = `${p.fase ? p.fase.replace(/_/g, ' ') : 'Partido'}`;
  document.getElementById('edit-p-nom1').innerText = j1;
  document.getElementById('edit-p-nom2').innerText = j2;
  document.getElementById('edit-p-g1').value = p.goles1;
  document.getElementById('edit-p-g2').value = p.goles2;

  const huboPen = p.penales_g1 !== null && p.penales_g2 !== null;
  document.getElementById('edit-p-hubo-penales').checked = huboPen;
  document.getElementById('edit-p-inputs-penales').style.display = huboPen ? 'flex' : 'none';
  document.getElementById('edit-p-pen1').value = huboPen ? p.penales_g1 : '';
  document.getElementById('edit-p-pen2').value = huboPen ? p.penales_g2 : '';

  document.getElementById('modal-editar-partido').style.display = 'flex';
};

window.cerrarModalEditarPartido = function() {
  document.getElementById('modal-editar-partido').style.display = 'none';
};

window.guardarEdicionPartido = async function(e) {
  e.preventDefault();
  if (!ES_ADMIN_ACTUAL) return;

  const pId = document.getElementById('edit-p-id').value;
  const p = PARTIDOS.find(item => item.id === pId);
  if (!p) return;

  const g1 = parseInt(document.getElementById('edit-p-g1').value, 10) || 0;
  const g2 = parseInt(document.getElementById('edit-p-g2').value, 10) || 0;
  const huboPen = document.getElementById('edit-p-hubo-penales').checked;

  let pen1 = null;
  let pen2 = null;
  let penGanadorId = null;

  if (huboPen) {
    pen1 = parseInt(document.getElementById('edit-p-pen1').value, 10);
    pen2 = parseInt(document.getElementById('edit-p-pen2').value, 10);
    if (isNaN(pen1) || isNaN(pen2) || pen1 === pen2) {
      alert('Debes ingresar un marcador válido con un ganador en penales.');
      return;
    }
    penGanadorId = pen1 > pen2 ? p.jugador1_id : p.jugador2_id;
  }

  try {
    const { error } = await db.from('partidos').update({
      goles1: g1,
      goles2: g2,
      penales_g1: pen1,
      penales_g2: pen2,
      penales_ganador_id: penGanadorId
    }).eq('id', pId);

    if (error) throw error;
    cerrarModalEditarPartido();
    await recargarTodo();
  } catch (err) {
    alert('Error al corregir partido: ' + err.message);
  }
};

function renderizarTablaHistorica() {
  const filtroJuego = document.getElementById('filtro-juego-historica')?.value || 'TODOS';
  
  let partidosFiltrados = PARTIDOS;
  if (filtroJuego !== 'TODOS') {
    const torneosIdsDelJuego = TORNEOS.filter(t => t.juego === filtroJuego).map(t => t.id);
    partidosFiltrados = PARTIDOS.filter(p => torneosIdsDelJuego.includes(p.torneo_id));
  }

  const ranking = calcularEstadisticas(partidosFiltrados);
  const tbody = document.getElementById('body-tabla-historica');
  tbody.innerHTML = ranking.map((r, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>
        <span class="player-user-cell" title="${r.username}">${r.username}</span>
      </td>
      <td>${r.pj}</td><td>${r.pg}</td><td>${r.pe}</td><td>${r.pp}</td>
      <td>${r.gf}</td><td>${r.gc}</td>
      <td>${r.dif > 0 ? '+' + r.dif : r.dif}</td>
      <td style="color:#58a6ff; font-weight:bold;">${r.pts}</td>
    </tr>
  `).join('');
}

function renderizarVitrina() {
  const palmaresBox = document.getElementById('vitrina-palmares');
  const edicionesBox = document.getElementById('vitrina-ediciones');
  const filtroJuego = document.getElementById('filtro-juego-palmares')?.value || 'TODOS';

  const copasPorJugador = {};
  JUGADORES.forEach(j => { copasPorJugador[j.id] = { id: j.id, nombre: j.nombre, ligas: 0, copas: 0, total: 0 }; });

  let torneosCerrados = TORNEOS.filter(t => t.campeon_id && t.subformato !== 'AMISTOSO');

  if (filtroJuego !== 'TODOS') {
    torneosCerrados = torneosCerrados.filter(t => t.juego === filtroJuego);
  }

  torneosCerrados.forEach(t => {
    if (copasPorJugador[t.campeon_id]) {
      if (t.formato === 'LIGA') copasPorJugador[t.campeon_id].ligas++;
      else copasPorJugador[t.campeon_id].copas++;
      copasPorJugador[t.campeon_id].total++;
    }
  });

  const rankingPalmares = Object.values(copasPorJugador).sort((a, b) => b.total - a.total);
  palmaresBox.innerHTML = rankingPalmares.map(p => `
    <div class="palmares-card" onclick="abrirModalTitulos('${p.id}')">
      <div>
        <strong style="font-size:0.85rem;">${p.nombre}</strong>
        <div style="font-size:0.7rem; color:var(--text-muted); margin-top:1px;">🏆 ${p.ligas} Ligas | ⚔️ ${p.copas} Copas</div>
      </div>
      <div style="color:var(--gold); font-size:1.05rem; font-weight:900;">⭐ ${p.total}</div>
    </div>
  `).join('');

  if (torneosCerrados.length === 0) {
    edicionesBox.innerHTML = '<p style="color:var(--text-muted); font-size:0.8rem; text-align:center; padding:8px;">No hay torneos finalizados para este filtro.</p>';
    return;
  }

  edicionesBox.innerHTML = torneosCerrados.map(t => {
    const champ = JUGADORES.find(j => j.id === t.campeon_id);
    const champEsc = obtenerEscudoJugador(t.campeon_id, t);

    const slotTrofeo = t.trofeo_url 
      ? `<div class="trofeo-slot"><img src="${t.trofeo_url}" alt="Trofeo"></div>` 
      : `<div class="trofeo-slot"><span class="emoji-trofeo">🏆</span></div>`;

    const badgeJuego = t.juego ? `<span class="tag-badge-micro" style="background:rgba(241,224,90,0.15); color:var(--gold);">${t.juego}</span>` : '';
    const badgeFormato = `<span class="tag-badge-micro" style="background:rgba(88,166,255,0.15); color:#58a6ff;">${t.formato}</span>`;

    const botonEliminar = ES_ADMIN_ACTUAL 
      ? `<button class="btn-danger-sm" style="margin-left:auto; padding:2px 6px;" onclick="event.stopPropagation(); eliminarTorneoFinalizado('${t.id}')">🗑️</button>` 
      : '';

    return `
      <div class="edicion-card clickable" onclick="abrirPlacaDeTorneoGuardado('${t.id}')">
        ${slotTrofeo}
        <div class="edicion-info-row">
          ${badgeFormato}
          ${badgeJuego}
          <span class="edicion-titulo-truncado">${t.nombre}</span>
          <span style="color:var(--border);">•</span>
          <span>🥇</span>
          <b style="color:var(--gold);">${champ ? champ.nombre : '-'}</b>
          <img src="${champEsc}" class="club-badge-compact" alt="Escudo">
        </div>
        ${botonEliminar}
      </div>
    `;
  }).join('');
}

window.eliminarTorneoFinalizado = async function(torneoId) {
  if (!ES_ADMIN_ACTUAL) return;
  if (!confirm('¿Eliminar esta edición finalizada y todos sus partidos asociados?')) return;
  try {
    const { error } = await db.from('torneos').delete().eq('id', torneoId);
    if (error) throw error;
    await recargarTodo();
  } catch (err) {
    alert('Error al borrar torneo: ' + err.message);
  }
};

window.abrirPlacaDeTorneoGuardado = function(torneoId) {
  const torneo = TORNEOS.find(t => t.id === torneoId);
  if (!torneo) return;

  const champ = JUGADORES.find(j => j.id === torneo.campeon_id) || { nombre: 'Campeón' };
  const sub = JUGADORES.find(j => j.id === torneo.subcampeon_id) || { nombre: 'Subcampeón' };
  const partidosTorneo = PARTIDOS.filter(p => p.torneo_id === torneoId);
  const partIds = Array.isArray(torneo.participantes) ? torneo.participantes : null;
  const ranking = calcularEstadisticas(partidosTorneo, partIds);

  generarPlacaHistoria916(torneo.nombre, torneo.formato, champ, sub, ranking, torneo.trofeo_url, partidosTorneo, torneo.subformato, torneo);
};

window.abrirModalTitulos = function(jugadorId) {
  const jugador = JUGADORES.find(j => j.id === jugadorId);
  if (!jugador) return;

  const titulosGanados = TORNEOS.filter(t => t.campeon_id === jugadorId && t.subformato !== 'AMISTOSO');
  document.getElementById('modal-perfil-nombre').innerText = `🏆 Palmarés de ${jugador.nombre}`;
  document.getElementById('modal-perfil-resumen').innerText = `Total: ${titulosGanados.length} Estrellas Oficiales`;

  const lista = document.getElementById('modal-perfil-lista');
  if (titulosGanados.length === 0) {
    lista.innerHTML = `<p style="color:var(--text-muted); font-size:0.8rem; text-align:center; padding:8px;">Todavía no tiene títulos ganados.</p>`;
  } else {
    lista.innerHTML = titulosGanados.map(t => {
      const slotTrofeo = t.trofeo_url 
        ? `<div class="trofeo-slot"><img src="${t.trofeo_url}" alt="Trofeo"></div>` 
        : `<div class="trofeo-slot"><span class="emoji-trofeo">🏆</span></div>`;

      const esc = obtenerEscudoJugador(jugadorId, t);
      const badgeFormato = `<span class="tag-badge-micro" style="background:rgba(88,166,255,0.15); color:#58a6ff;">${t.formato}</span>`;

      return `
        <div class="edicion-card clickable" onclick="abrirPlacaDeTorneoGuardado('${t.id}')">
          ${slotTrofeo}
          <div class="edicion-info-row">
            ${badgeFormato}
            <span class="edicion-titulo-truncado">${t.nombre}</span>
            <span style="color:var(--border);">•</span>
            <b style="color:var(--gold);">${jugador.nombre}</b>
            <img src="${esc}" class="club-badge-compact" alt="Escudo">
          </div>
        </div>
      `;
    }).join('');
  }

  document.getElementById('modal-perfil-titulos').style.display = 'flex';
};

window.cerrarModalTitulos = function() {
  document.getElementById('modal-perfil-titulos').style.display = 'none';
};

window.abrirModalEditarTorneo = function() {
  if (!TORNEO_ACTIVO) return;
  document.getElementById('edit-torneo-juego').value = TORNEO_ACTIVO.juego || 'EA FC 26';
  document.getElementById('edit-torneo-trofeo-file').value = '';
  document.getElementById('modal-editar-torneo').style.display = 'flex';
};

window.cerrarModalEditarTorneo = function() {
  document.getElementById('modal-editar-torneo').style.display = 'none';
};

window.guardarEdicionTorneo = async function(e) {
  e.preventDefault();
  if (!TORNEO_ACTIVO) return;

  const nuevoJuego = document.getElementById('edit-torneo-juego').value;
  const fileInput = document.getElementById('edit-torneo-trofeo-file');

  const updateData = { juego: nuevoJuego };

  if (fileInput.files && fileInput.files[0]) {
    updateData.trofeo_url = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (evt) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const maxDim = 800;
          let w = img.width, h = img.height;
          if (w > h && w > maxDim) { h = Math.round((h * maxDim) / w); w = maxDim; }
          else if (h > maxDim) { h = Math.round((h * maxDim) / h); h = maxDim; }
          canvas.width = w; canvas.height = h;
          canvas.getContext('2d').drawImage(img, 0, 0, w, h);
          resolve(canvas.toDataURL('image/png'));
        };
        img.src = evt.target.result;
      };
      reader.readAsDataURL(fileInput.files[0]);
    });
  }

  try {
    const { error } = await db.from('torneos').update(updateData).eq('id', TORNEO_ACTIVO.id);
    if (error) throw error;
    cerrarModalEditarTorneo();
    await recargarTodo();
  } catch (err) {
    alert('Error al actualizar: ' + err.message);
  }
};

// -------------------------------------------------------------
// CARA A CARA (H2H PRO - DISEÑO EN DOS RENGLONES Y RACHA LIMPIA)
// -------------------------------------------------------------
window.renderizarH2H = function() {
  const j1 = document.getElementById('h2h-j1')?.value;
  const j2 = document.getElementById('h2h-j2')?.value;
  const resBox = document.getElementById('h2h-resultado');
  if (!resBox) return;

  if (!j1 || !j2 || j1 === j2) {
    resBox.innerHTML = `<p style="color:var(--text-muted); padding:10px;">Seleccioná dos rivales diferentes.</p>`;
    return;
  }

  const u1 = JUGADORES.find(j => j.id === j1);
  const u2 = JUGADORES.find(j => j.id === j2);

  if (!u1 || !u2) {
    resBox.innerHTML = `<p style="color:var(--text-muted); padding:10px;">Seleccioná dos rivales diferentes.</p>`;
    return;
  }

  let pj = 0, g1 = 0, g2 = 0, emp = 0, gf1 = 0, gf2 = 0;
  let rachaActual = null;
  let contadorRacha = 0;
  let mayorGoleada = null;

  const partidosDuelo = PARTIDOS.filter(p => 
    (p.jugador1_id === j1 && p.jugador2_id === j2) || (p.jugador1_id === j2 && p.jugador2_id === j1)
  ).sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

  partidosDuelo.forEach(p => {
    pj++;
    const golJ1 = p.jugador1_id === j1 ? p.goles1 : p.goles2;
    const golJ2 = p.jugador1_id === j1 ? p.goles2 : p.goles1;
    gf1 += golJ1; gf2 += golJ2;

    let ganadorEstePartido = null;

    const huboPen = (p.penales_g1 !== null && p.penales_g2 !== null && p.penales_g1 !== undefined && p.penales_g2 !== undefined);
    if (huboPen) {
      const penJ1 = p.jugador1_id === j1 ? p.penales_g1 : p.penales_g2;
      const penJ2 = p.jugador1_id === j1 ? p.penales_g2 : p.penales_g1;
      if (penJ1 > penJ2) {
        g1++;
        ganadorEstePartido = j1;
      } else {
        g2++;
        ganadorEstePartido = j2;
      }
    } else {
      if (golJ1 > golJ2) {
        g1++;
        ganadorEstePartido = j1;
      } else if (golJ2 > golJ1) {
        g2++;
        ganadorEstePartido = j2;
      } else {
        emp++;
        ganadorEstePartido = 'EMPATE';
      }
    }

    const dif = Math.abs(golJ1 - golJ2);
    if (dif > 0) {
      const gGanador = Math.max(golJ1, golJ2);
      const gPerdedor = Math.min(golJ1, golJ2);
      const nomGanador = golJ1 > golJ2 ? u1.nombre : u2.nombre;

      const esMayor = !mayorGoleada || 
        dif > mayorGoleada.dif || 
        (dif === mayorGoleada.dif && gGanador > mayorGoleada.gGanador);

      if (esMayor) {
        mayorGoleada = {
          ganador: nomGanador,
          gGanador,
          gPerdedor,
          dif
        };
      }
    }

    if (ganadorEstePartido === rachaActual) {
      contadorRacha++;
    } else {
      rachaActual = ganadorEstePartido;
      contadorRacha = 1;
    }
  });

  let htmlRacha = '<strong style="font-size:0.8rem; color:#f0f6fc; margin-top:3px; display:block;">Sin partidos</strong>';
  if (pj > 0) {
    if (rachaActual === j1) {
      htmlRacha = `
        <strong style="font-size:0.85rem; color:#58a6ff; margin-top:2px; display:block;">🔥 ${u1.nombre}</strong>
        <small style="font-size:0.72rem; color:var(--text-muted); display:block; margin-top:1px;">(${contadorRacha} ${contadorRacha === 1 ? 'partido' : 'partidos'} invicto)</small>
      `;
    } else if (rachaActual === j2) {
      htmlRacha = `
        <strong style="font-size:0.85rem; color:var(--gold); margin-top:2px; display:block;">🔥 ${u2.nombre}</strong>
        <small style="font-size:0.72rem; color:var(--text-muted); display:block; margin-top:1px;">(${contadorRacha} ${contadorRacha === 1 ? 'partido' : 'partidos'} invicto)</small>
      `;
    } else {
      htmlRacha = `
        <strong style="font-size:0.8rem; color:#f0f6fc; margin-top:2px; display:block;">⚖️ Empate</strong>
        <small style="font-size:0.72rem; color:var(--text-muted); display:block; margin-top:1px;">(Último duelo igualado)</small>
      `;
    }
  }

  const htmlGoleada = mayorGoleada 
    ? `
      <strong style="font-size:0.85rem; color:var(--gold); margin-top:2px; display:block;">⚽ ${mayorGoleada.ganador}</strong>
      <small style="font-size:0.74rem; color:#f0f6fc; font-weight:bold; display:block; margin-top:1px;">${mayorGoleada.gGanador} - ${mayorGoleada.gPerdedor}</small>
    `
    : '<strong style="font-size:0.8rem; color:var(--text-muted); margin-top:3px; display:block;">Aún sin diferencias</strong>';

  resBox.innerHTML = `
    <h3 style="margin-bottom: 4px; font-size:1.1rem;">${u1.nombre} vs ${u2.nombre}</h3>
    <p style="color:var(--text-muted); font-size:0.78rem; margin-bottom:12px;">${pj} Partidos Disputados en esta Comunidad (Tocá una tarjeta para ver el detalle)</p>
    
    <div class="h2h-stats-grid">
      <div class="h2h-stat-col clickable" onclick="abrirModalH2HDetalle('${j1}', '${j2}', 'VICTORIAS_J1')">
        <span class="h2h-stat-num" style="color: #58a6ff;">${g1}</span>
        <span class="h2h-stat-tag">VICTORIAS</span>
        <span class="h2h-stat-name">${u1.nombre}</span>
      </div>
      <div class="h2h-stat-col clickable" onclick="abrirModalH2HDetalle('${j1}', '${j2}', 'EMPATES')">
        <span class="h2h-stat-num" style="color: var(--text-muted);">${emp}</span>
        <span class="h2h-stat-tag" style="margin-top: 14px;">EMPATES</span>
      </div>
      <div class="h2h-stat-col clickable" onclick="abrirModalH2HDetalle('${j1}', '${j2}', 'VICTORIAS_J2')">
        <span class="h2h-stat-num" style="color: var(--gold);">${g2}</span>
        <span class="h2h-stat-tag">VICTORIAS</span>
        <span class="h2h-stat-name">${u2.nombre}</span>
      </div>
    </div>
    
    <p style="margin: 12px 0 10px 0; font-size:0.85rem; color:var(--text-muted)">Goles Totales: <b style="color:#58a6ff;">${gf1}</b> - <b style="color:var(--gold);">${gf2}</b></p>
    
    <div class="h2h-extra-grid">
      <div class="h2h-extra-item">
        <small style="font-size:0.68rem; color:var(--text-muted); display:block; font-weight:bold;">RACHA ACTUAL</small>
        ${htmlRacha}
      </div>
      <div class="h2h-extra-item">
        <small style="font-size:0.68rem; color:var(--text-muted); display:block; font-weight:bold;">MAYOR GOLEADA</small>
        ${htmlGoleada}
      </div>
    </div>
  `;
};

// MODAL DE DETALLE DE PARTIDOS H2H (CON ESCUDOS DE EQUIPOS)
window.abrirModalH2HDetalle = function(j1Id, j2Id, filtroTipo) {
  const u1 = JUGADORES.find(j => j.id === j1Id);
  const u2 = JUGADORES.find(j => j.id === j2Id);
  if (!u1 || !u2) return;

  const partidosDuelo = PARTIDOS.filter(p => 
    (p.jugador1_id === j1Id && p.jugador2_id === j2Id) || (p.jugador1_id === j2Id && p.jugador2_id === j1Id)
  ).sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  let filtrados = [];
  let titulo = '';

  if (filtroTipo === 'VICTORIAS_J1') {
    titulo = `Victorias de ${u1.nombre}`;
    filtrados = partidosDuelo.filter(p => {
      const gJ1 = p.jugador1_id === j1Id ? p.goles1 : p.goles2;
      const gJ2 = p.jugador1_id === j1Id ? p.goles2 : p.goles1;
      const huboPen = (p.penales_g1 !== null && p.penales_g2 !== null && p.penales_g1 !== undefined);
      if (huboPen) {
        const penJ1 = p.jugador1_id === j1Id ? p.penales_g1 : p.penales_g2;
        const penJ2 = p.jugador1_id === j1Id ? p.penales_g2 : p.penales_g1;
        return penJ1 > penJ2;
      }
      return gJ1 > gJ2;
    });
  } else if (filtroTipo === 'VICTORIAS_J2') {
    titulo = `Victorias de ${u2.nombre}`;
    filtrados = partidosDuelo.filter(p => {
      const gJ1 = p.jugador1_id === j1Id ? p.goles1 : p.goles2;
      const gJ2 = p.jugador1_id === j1Id ? p.goles2 : p.goles1;
      const huboPen = (p.penales_g1 !== null && p.penales_g2 !== null && p.penales_g1 !== undefined);
      if (huboPen) {
        const penJ1 = p.jugador1_id === j1Id ? p.penales_g1 : p.penales_g2;
        const penJ2 = p.jugador1_id === j1Id ? p.penales_g2 : p.penales_g1;
        return penJ2 > penJ1;
      }
      return gJ2 > gJ1;
    });
  } else {
    titulo = 'Empates';
    filtrados = partidosDuelo.filter(p => {
      const huboPen = (p.penales_g1 !== null && p.penales_g2 !== null && p.penales_g1 !== undefined);
      return !huboPen && p.goles1 === p.goles2;
    });
  }

  document.getElementById('modal-h2h-titulo').innerText = titulo;
  document.getElementById('modal-h2h-subtitulo').innerText = `${u1.nombre} vs ${u2.nombre} (${filtrados.length} ${filtrados.length === 1 ? 'partido' : 'partidos'})`;

  const lista = document.getElementById('modal-h2h-lista');
  if (filtrados.length === 0) {
    lista.innerHTML = `<p style="color:var(--text-muted); font-size:0.8rem; text-align:center; padding:12px;">No se registraron partidos para esta condición.</p>`;
  } else {
    lista.innerHTML = filtrados.map(p => {
      const jLocal = JUGADORES.find(j => j.id === p.jugador1_id)?.nombre || 'J1';
      const jVisita = JUGADORES.find(j => j.id === p.jugador2_id)?.nombre || 'J2';
      const torneoRel = TORNEOS.find(t => t.id === p.torneo_id);
      const nombreTorneo = torneoRel ? torneoRel.nombre : 'Torneo';
      const juegoNom = torneoRel?.juego ? `(${torneoRel.juego})` : '';
      const fecha = new Date(p.created_at).toLocaleDateString('es-AR', { day: '2-digit', month: 'short' });

      const escLocal = obtenerEscudoJugador(p.jugador1_id, torneoRel);
      const escVisita = obtenerEscudoJugador(p.jugador2_id, torneoRel);
      const imgLocalHtml = escLocal ? `<img src="${escLocal}" class="club-badge-micro" style="margin-right:4px;">` : '';
      const imgVisitaHtml = escVisita ? `<img src="${escVisita}" class="club-badge-micro" style="margin-left:4px;">` : '';

      let scoreTxt = `${p.goles1} - ${p.goles2}`;
      if (p.penales_g1 !== null && p.penales_g2 !== null && p.penales_g1 !== undefined) {
        scoreTxt = `(${p.penales_g1}) ${p.goles1} - ${p.goles2} (${p.penales_g2})`;
      }

      return `
        <div class="partido-item" style="padding:8px 10px; font-size:0.8rem;">
          <div style="display:flex; flex-direction:column; gap:3px; text-align:left; width:100%;">
            <div style="display:flex; align-items:center; justify-content:space-between;">
              <span style="display:flex; align-items:center;">${imgLocalHtml}<strong>${jLocal}</strong></span>
              <b style="color:var(--gold); font-size:0.88rem; margin:0 8px;">${scoreTxt}</b>
              <span style="display:flex; align-items:center;"><strong>${jVisita}</strong>${imgVisitaHtml}</span>
            </div>
            <small style="color:var(--text-muted); font-size:0.7rem; text-align:center;">${nombreTorneo} ${juegoNom} • ${fecha}</small>
          </div>
        </div>
      `;
    }).join('');
  }

  document.getElementById('modal-h2h-detalle').style.display = 'flex';
};

window.cerrarModalH2HDetalle = function() {
  document.getElementById('modal-h2h-detalle').style.display = 'none';
};

function renderizarPadron() {
  const lista = document.getElementById('lista-padron-jugadores');
  if (!lista) return;

  if (JUGADORES.length === 0) {
    lista.innerHTML = '<li style="color:var(--text-muted); font-size:0.8rem; text-align:center; padding:10px;">No hay miembros registrados en esta comunidad.</li>';
    return;
  }

  lista.innerHTML = JUGADORES.map(j => {
    const botonExpulsar = (ES_ADMIN_ACTUAL && j.id !== CUENTA_LOGUEADA.id)
      ? `<button class="btn-danger-sm" onclick="expulsarMiembro('${j.id}', '${j.nombre}')">Expulsar</button>`
      : '';

    return `
      <li class="padron-item">
        <div>
          <strong>${j.nombre}</strong>
          <span style="color:var(--text-muted); font-size:0.75rem; margin-left:6px;">${j.username}</span>
          <small style="color:${j.rol === 'ADMIN' ? 'var(--gold)' : 'var(--text-muted)'}; margin-left:6px;">${j.rol === 'ADMIN' ? '👑 Admin' : 'Miembro'}</small>
        </div>
        ${botonExpulsar}
      </li>
    `;
  }).join('');
}

window.expulsarMiembro = async function(cuentaId, nombre) {
  if (!ES_ADMIN_ACTUAL) return;
  if (!confirm(`¿Expulsar a ${nombre} de esta comunidad?`)) return;
  try {
    const { error } = await db.from('miembros_comunidad').delete().eq('comunidad_id', COMUNIDAD_ACTIVA.id).eq('cuenta_id', cuentaId);
    if (error) throw error;
    await recargarTodo();
  } catch (err) {
    alert('Error al expulsar: ' + err.message);
  }
};

window.eliminarPartido = async function(id) {
  if (!confirm('¿Eliminar este partido registrado?')) return;
  try {
    const { error } = await db.from('partidos').delete().eq('id', id);
    if (error) throw error;
    await recargarTodo();
  } catch (err) {
    alert('Error al borrar: ' + err.message);
  }
};

window.finalizarTorneoActual = async function(auto = false) {
  if (!TORNEO_ACTIVO || !COMUNIDAD_ACTIVA) return;
  const partidosDeHoy = PARTIDOS.filter(p => p.torneo_id === TORNEO_ACTIVO.id);
  const partIds = Array.isArray(TORNEO_ACTIVO.participantes) ? TORNEO_ACTIVO.participantes : null;
  const ranking = calcularEstadisticas(partidosDeHoy, partIds);

  let campeon = null;
  let subcampeon = null;

  const sub = TORNEO_ACTIVO.subformato;

  if (TORNEO_ACTIVO.formato === 'MANO_A_MANO' && (sub === 'MEJOR_DE_3' || sub === 'MEJOR_DE_5')) {
    const j1_id = partIds[0];
    const j2_id = partIds[1];
    let winsJ1 = 0;
    let winsJ2 = 0;
    partidosDeHoy.forEach(p => {
      const w = resolverGanadorPartidoUnico(p);
      if (w === j1_id) winsJ1++;
      if (w === j2_id) winsJ2++;
    });

    if (winsJ1 > winsJ2) {
      campeon = JUGADORES.find(j => j.id === j1_id);
      subcampeon = JUGADORES.find(j => j.id === j2_id);
    } else if (winsJ2 > winsJ1) {
      campeon = JUGADORES.find(j => j.id === j2_id);
      subcampeon = JUGADORES.find(j => j.id === j1_id);
    }
  } else if (TORNEO_ACTIVO.formato === 'COPA' || TORNEO_ACTIVO.formato === 'MANO_A_MANO') {
    const pFinal = partidosDeHoy.find(p => p.fase === 'FINAL' || p.fase === 'FINAL_VUELTA');
    if (pFinal) {
      const gId = sub === 'IDA_VUELTA' 
        ? resolverGanadorSerie(partidosDeHoy.find(p => p.fase === 'FINAL_IDA'), pFinal)
        : resolverGanadorPartidoUnico(pFinal);

      if (gId) {
        campeon = JUGADORES.find(j => j.id === gId);
        subcampeon = JUGADORES.find(j => j.id === (gId === pFinal.jugador1_id ? pFinal.jugador2_id : pFinal.jugador1_id));
      }
    }
  }

  if (!campeon && ranking.length >= 2) {
    campeon = ranking[0];
    subcampeon = ranking[1];
  }

  if (!campeon || !subcampeon) {
    if (!auto) alert('Se necesitan partidos disputados para definir al campeón.');
    return;
  }

  const esAmistoso = TORNEO_ACTIVO.subformato === 'AMISTOSO';
  const mensajeConfirm = esAmistoso 
    ? '¿Dar por finalizado el encuentro amistoso?'
    : `¿Dar por finalizado el torneo?\n🏆 Campeón: ${campeon.nombre}\n🥈 Subcampeón: ${subcampeon.nombre}`;

  if (!auto && !confirm(mensajeConfirm)) return;

  try {
    const { error } = await db.from('torneos').update({
      campeon_id: campeon.id,
      subcampeon_id: subcampeon.id
    }).eq('id', TORNEO_ACTIVO.id);

    if (error) throw error;

    generarPlacaHistoria916(TORNEO_ACTIVO.nombre, TORNEO_ACTIVO.formato, campeon, subcampeon, ranking, TORNEO_ACTIVO.trofeo_url, partidosDeHoy, TORNEO_ACTIVO.subformato, TORNEO_ACTIVO);
    await recargarTodo();
  } catch (err) {
    if (!auto) alert('Error al cerrar: ' + err.message);
  }
};

window.cambiarTemaPlaca = function(nuevoTema) {
  ESTILO_PLACA_ACTUAL = nuevoTema;
  if (ULTIMA_DATA_PLACA) {
    const d = ULTIMA_DATA_PLACA;
    generarPlacaHistoria916(d.nombreTorneo, d.formato, d.campeon, d.subcampeon, d.ranking, d.trofeoUrl, d.partidosTorneo, d.subformato, d.torneoObj);
  }
};

async function generarPlacaHistoria916(nombreTorneo, formato, campeon, subcampeon, ranking, trofeoUrl, partidosTorneo = [], subformato = 'UNICO', torneoObj = TORNEO_ACTIVO) {
  ULTIMA_DATA_PLACA = { nombreTorneo, formato, campeon, subcampeon, ranking, trofeoUrl, partidosTorneo, subformato, torneoObj };

  const canvas = document.getElementById('canvas-placa');
  const ctx = canvas.getContext('2d');

  const cargarImg = (src) => new Promise((resolve) => {
    if (!src) return resolve(null);
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });

  const champEscUrl = obtenerEscudoJugador(campeon.id, torneoObj);
  const subEscUrl = obtenerEscudoJugador(subcampeon.id, torneoObj);

  const [imgTrofeo, imgEscChamp, imgEscSub] = await Promise.all([
    cargarImg(trofeoUrl),
    cargarImg(champEscUrl),
    cargarImg(subEscUrl)
  ]);

  const bgGrad = ctx.createLinearGradient(0, 0, 0, 1920);

  let colorHeader = '#58a6ff';
  let colorAcento = '#f1e05a';
  let cardBgChamp = 'rgba(241, 224, 90, 0.07)';
  let cardBorderChamp = '#f1e05a';

  if (ESTILO_PLACA_ACTUAL === 'DORADO_CHAMPION') {
    bgGrad.addColorStop(0, '#1a1405');
    bgGrad.addColorStop(0.35, '#261d07');
    bgGrad.addColorStop(0.7, '#151003');
    bgGrad.addColorStop(1, '#080601');
    colorHeader = '#f1e05a';
    colorAcento = '#ffd700';
    cardBgChamp = 'rgba(255, 215, 0, 0.12)';
    cardBorderChamp = '#ffd700';
  } else if (ESTILO_PLACA_ACTUAL === 'TRANSMISION_TV') {
    bgGrad.addColorStop(0, '#041026');
    bgGrad.addColorStop(0.35, '#091c3d');
    bgGrad.addColorStop(0.7, '#071630');
    bgGrad.addColorStop(1, '#020814');
    colorHeader = '#38bdf8';
    colorAcento = '#38bdf8';
    cardBgChamp = 'rgba(56, 189, 248, 0.1)';
    cardBorderChamp = '#38bdf8';
  } else {
    bgGrad.addColorStop(0, '#0a0e17');
    bgGrad.addColorStop(0.35, '#111723');
    bgGrad.addColorStop(0.7, '#0d111a');
    bgGrad.addColorStop(1, '#05070a');
  }

  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 1080, 1920);

  ctx.fillStyle = colorHeader;
  ctx.font = '800 28px system-ui, -apple-system, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('MUNDIALITOS OFICIAL', 540, 110);

  // Fecha del torneo formateada
  const fechaTorneoStr = torneoObj?.created_at 
    ? new Date(torneoObj.created_at).toLocaleDateString('es-AR', { day: '2-digit', month: 'long', year: 'numeric' }).toUpperCase()
    : '';

  if (fechaTorneoStr) {
    ctx.fillStyle = '#8b949e';
    ctx.font = '700 20px system-ui, -apple-system, sans-serif';
    ctx.fillText(fechaTorneoStr, 540, 145);
  }

  ctx.fillStyle = '#ffffff';
  ctx.font = '900 52px system-ui, -apple-system, sans-serif';
  let tNombre = nombreTorneo.toUpperCase();
  if (ctx.measureText(tNombre).width > 880) {
    while (tNombre.length > 0 && ctx.measureText(tNombre + '...').width > 880) {
      tNombre = tNombre.slice(0, -1);
    }
    tNombre += '...';
  }
  ctx.fillText(tNombre, 540, 215);

  const juegoTxt = torneoObj?.juego || 'EA FC 26';
  ctx.fillStyle = colorAcento;
  ctx.font = '700 24px system-ui, -apple-system, sans-serif';
  ctx.fillText(`🎮 ${juegoTxt.toUpperCase()}`, 540, 260);

  const copaY = 295;
  const copaSize = 250;

  const radialGlow = ctx.createRadialGradient(540, copaY + (copaSize / 2), 20, 540, copaY + (copaSize / 2), 200);
  radialGlow.addColorStop(0, ESTILO_PLACA_ACTUAL === 'TRANSMISION_TV' ? 'rgba(56, 189, 248, 0.25)' : 'rgba(241, 224, 90, 0.28)');
  radialGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = radialGlow;
  ctx.beginPath();
  ctx.arc(540, copaY + (copaSize / 2), 200, 0, Math.PI * 2);
  ctx.fill();

  if (imgTrofeo) {
    ctx.drawImage(imgTrofeo, 540 - (copaSize / 2), copaY, copaSize, copaSize);
  } else {
    ctx.font = '130px system-ui';
    ctx.fillText(subformato === 'AMISTOSO' ? '🤝' : '🏆', 540, copaY + 170);
  }

  const cardChampY = 575;
  ctx.fillStyle = cardBgChamp;
  ctx.fillRect(100, cardChampY, 880, 180);
  ctx.strokeStyle = cardBorderChamp;
  ctx.lineWidth = 3;
  ctx.strokeRect(100, cardChampY, 880, 180);

  ctx.fillStyle = colorAcento;
  ctx.font = '800 24px system-ui, -apple-system, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(subformato === 'AMISTOSO' ? '⚡ GANADOR DEL ENCUENTRO' : '👑 CAMPEÓN OFICIAL', 540, cardChampY + 40);

  ctx.fillStyle = '#ffffff';
  ctx.font = '900 56px system-ui, -apple-system, sans-serif';
  ctx.fillText(campeon.nombre.toUpperCase(), 540, cardChampY + 105);

  const clubChampNom = obtenerNombreEquipoJugador(campeon.id, torneoObj).toUpperCase();
  if (clubChampNom) {
    ctx.font = '800 26px system-ui, -apple-system, sans-serif';
    const textW = ctx.measureText(clubChampNom).width;
    const badgeSize = 32;
    const spacing = 12;
    const totalW = (imgEscChamp ? badgeSize + spacing : 0) + textW;
    const startX = 540 - (totalW / 2);

    if (imgEscChamp) {
      ctx.drawImage(imgEscChamp, startX, cardChampY + 128, badgeSize, badgeSize);
    }
    ctx.fillStyle = colorAcento;
    ctx.textAlign = 'left';
    ctx.fillText(clubChampNom, startX + (imgEscChamp ? badgeSize + spacing : 0), cardChampY + 154);
    ctx.textAlign = 'center';
  }

  const subY = 775;
  ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
  ctx.fillRect(100, subY, 880, 75);
  ctx.strokeStyle = '#30363d';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(100, subY, 880, 75);

  const clubSubNom = obtenerNombreEquipoJugador(subcampeon.id, torneoObj);
  const subTxt = `Segundo Puesto: ${subcampeon.nombre} ${clubSubNom ? `(${clubSubNom})` : ''}`;
  ctx.font = '700 24px system-ui, -apple-system, sans-serif';
  const subTextW = ctx.measureText(subTxt).width;
  const subBadgeSize = 26;
  const subSpacing = 10;
  const subTotalW = 32 + subSpacing + (imgEscSub ? subBadgeSize + subSpacing : 0) + subTextW;
  const subStartX = 540 - (subTotalW / 2);

  ctx.textAlign = 'left';
  ctx.fillText('🥈', subStartX, subY + 47);
  let currentSubX = subStartX + 32 + subSpacing;

  if (imgEscSub) {
    ctx.drawImage(imgEscSub, currentSubX, subY + 25, subBadgeSize, subBadgeSize);
    currentSubX += subBadgeSize + subSpacing;
  }
  ctx.fillStyle = '#cbd5e1';
  ctx.fillText(subTxt, currentSubX, subY + 47);
  ctx.textAlign = 'center';

  const inferiorY = 895;

  if (formato === 'LIGA') {
    ctx.fillStyle = colorHeader;
    ctx.font = '800 28px system-ui, -apple-system, sans-serif';
    ctx.fillText('POSICIONES FINALES', 540, inferiorY);

    ctx.fillStyle = '#8b949e';
    ctx.font = '700 20px monospace';
    ctx.textAlign = 'left';
    ctx.fillText('POS  JUGADOR', 120, inferiorY + 42);
    ctx.textAlign = 'right';
    ctx.fillText('PJ  PG  PE  PP  DIF  PTS', 960, inferiorY + 42);

    ranking.slice(0, 8).forEach((r, idx) => {
      const rowY = inferiorY + 90 + (idx * 68);
      if (idx % 2 === 0) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
        ctx.fillRect(100, rowY - 40, 880, 58);
      }
      if (idx === 0) {
        ctx.fillStyle = 'rgba(241, 224, 90, 0.08)';
        ctx.fillRect(100, rowY - 40, 880, 58);
      }

      ctx.textAlign = 'left';
      ctx.font = '800 23px monospace';
      ctx.fillStyle = idx === 0 ? colorAcento : '#ffffff';
      ctx.fillText(`${idx + 1}. ${r.username.slice(0, 14)}`, 120, rowY);

      ctx.textAlign = 'right';
      ctx.font = '700 22px monospace';
      ctx.fillStyle = '#cbd5e1';
      const statsStr = `${r.pj}   ${r.pg}   ${r.pe}   ${r.pp}   ${(r.dif >= 0 ? '+' : '') + r.dif}`.padEnd(16, ' ');
      ctx.fillText(statsStr, 860, rowY);

      ctx.font = '900 24px monospace';
      ctx.fillStyle = idx === 0 ? colorAcento : colorHeader;
      ctx.fillText(`${r.pts}`, 960, rowY);
    });
  } else {
    const fasesMap = {
      'FINAL': { titulo: '👑 GRAN FINAL', partidos: [] },
      'SEMIS_VUELTA': { titulo: '⚡ SEMIFINALES (VUELTA)', partidos: [] },
      'SEMIS_IDA': { titulo: '⚡ SEMIFINALES (IDA)', partidos: [] },
      'SEMIS': { titulo: '⚡ SEMIFINALES', partidos: [] },
      'CUARTOS_VUELTA': { titulo: '🛡️ CUARTOS DE FINAL (VUELTA)', partidos: [] },
      'CUARTOS_IDA': { titulo: '🛡️ CUARTOS DE FINAL (IDA)', partidos: [] },
      'CUARTOS': { titulo: '🛡️ CUARTOS DE FINAL', partidos: [] },
      'OCTAVOS_VUELTA': { titulo: '⚔️ OCTAVOS DE FINAL (VUELTA)', partidos: [] },
      'OCTAVOS_IDA': { titulo: '⚔️ OCTAVOS DE FINAL (IDA)', partidos: [] },
      'OCTAVOS': { titulo: '⚔️ OCTAVOS DE FINAL', partidos: [] },
      'SERIE': { titulo: '🎮 ENCUENTROS DE LA SERIE', partidos: [] }
    };

    partidosTorneo.forEach(p => {
      const f = p.fase || '';
      if (f.startsWith('FINAL')) fasesMap['FINAL'].partidos.push(p);
      else if (f.includes('SEMIS_VUELTA')) fasesMap['SEMIS_VUELTA'].partidos.push(p);
      else if (f.includes('SEMIS_IDA')) fasesMap['SEMIS_IDA'].partidos.push(p);
      else if (f.startsWith('SEMIS')) fasesMap['SEMIS'].partidos.push(p);
      else if (f.includes('CUARTOS_VUELTA')) fasesMap['CUARTOS_VUELTA'].partidos.push(p);
      else if (f.includes('CUARTOS_IDA')) fasesMap['CUARTOS_IDA'].partidos.push(p);
      else if (f.startsWith('CUARTOS')) fasesMap['CUARTOS'].partidos.push(p);
      else if (f.includes('OCTAVOS_VUELTA')) fasesMap['OCTAVOS_VUELTA'].partidos.push(p);
      else if (f.includes('OCTAVOS_IDA')) fasesMap['OCTAVOS_IDA'].partidos.push(p);
      else if (f.startsWith('OCTAVOS')) fasesMap['OCTAVOS'].partidos.push(p);
      else fasesMap['SERIE'].partidos.push(p);
    });

    let currentY = inferiorY;

    const ajustarTextoMax = (texto, maxWidth) => {
      if (ctx.measureText(texto).width <= maxWidth) return texto;
      let t = texto;
      while (t.length > 0 && ctx.measureText(t + '...').width > maxWidth) {
        t = t.slice(0, -1);
      }
      return t + '...';
    };

    for (const key of ['FINAL', 'SEMIS_VUELTA', 'SEMIS_IDA', 'SEMIS', 'CUARTOS_VUELTA', 'CUARTOS_IDA', 'CUARTOS', 'OCTAVOS_VUELTA', 'OCTAVOS_IDA', 'OCTAVOS', 'SERIE']) {
      const grupo = fasesMap[key];
      if (grupo.partidos.length === 0) continue;

      ctx.fillStyle = key === 'FINAL' ? colorAcento : colorHeader;
      ctx.font = '800 24px system-ui, -apple-system, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(grupo.titulo, 540, currentY);
      currentY += 20;

      grupo.partidos.forEach(p => {
        const j1 = JUGADORES.find(j => j.id === p.jugador1_id)?.nombre || 'J1';
        const j2 = JUGADORES.find(j => j.id === p.jugador2_id)?.nombre || 'J2';
        const c1 = obtenerNombreEquipoJugador(p.jugador1_id, torneoObj);
        const c2 = obtenerNombreEquipoJugador(p.jugador2_id, torneoObj);

        const scoreCentro = (p.penales_g1 !== null && p.penales_g2 !== null && p.penales_g1 !== undefined)
          ? `(${p.penales_g1}) ${p.goles1} - ${p.goles2} (${p.penales_g2})`
          : `${p.goles1} - ${p.goles2}`;

        ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
        ctx.fillRect(100, currentY, 880, 56);
        ctx.strokeStyle = key === 'FINAL' ? 'rgba(241, 224, 90, 0.3)' : '#30363d';
        ctx.strokeRect(100, currentY, 880, 56);

        ctx.textAlign = 'left';
        ctx.font = '700 21px system-ui, -apple-system, sans-serif';
        ctx.fillStyle = '#f0f6fc';
        const txtLocal = ajustarTextoMax(`${j1} (${c1})`, 330);
        ctx.fillText(txtLocal, 125, currentY + 36);

        ctx.textAlign = 'center';
        ctx.font = '900 22px monospace';
        ctx.fillStyle = key === 'FINAL' ? colorAcento : colorHeader;
        ctx.fillText(scoreCentro, 540, currentY + 36);

        ctx.textAlign = 'right';
        ctx.font = '700 21px system-ui, -apple-system, sans-serif';
        ctx.fillStyle = '#f0f6fc';
        const txtVisita = ajustarTextoMax(`${j2} (${c2})`, 330);
        ctx.fillText(txtVisita, 955, currentY + 36);

        currentY += 66;
      });

      currentY += 16;
    }
  }

  ctx.textAlign = 'center';
  ctx.fillStyle = '#8b949e';
  ctx.font = '600 22px system-ui, -apple-system, sans-serif';
  ctx.fillText('🏆 Desarrollado con Mundialitos App', 540, 1850);

  document.getElementById('modal-placa').style.display = 'flex';
};

window.addEventListener('DOMContentLoaded', inicializar);
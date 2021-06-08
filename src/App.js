import {
  Body,
  Box,
  Card,
  Container,
  Content,
  Footer,
  Header,
  Infos,
  Title
} from "./styles";
import Global from "./Global";
import Button from "./components/Button";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import image4 from "./assets/image4.png";
import image5 from "./assets/image5.png";
import image6 from "./assets/image6.png";

const App = () => {
  return (
    <>
      <Global />
      <Header>
        <p>
          Check out my fresh new course on building and growing an online
          audience
        </p>
      </Header>
      <Container>
        <Title>Authority Pro</Title>

        <Body>
          <h1>Shop</h1>
          <h6>Showing 1–6 of 9 results</h6>

          <Content>
            <Box>
              <Card>
                <img src={image1} alt="assets" />
              </Card>
              <h2>Dipped Tripod Stool</h2>
              <h2>
                $49.95 <span>$35.00</span>
              </h2>

              <Button Text={"Add to cart"} />
            </Box>

            <Box>
              <Card>
                <img src={image2} alt="assets" />
              </Card>
              <h2>Dipped Tripod Stool</h2>
              <h2>
                <span>$49.95</span>
              </h2>

              <Button type="button" Text={"Add to cart"} />
            </Box>

            <Box>
              <Card>
                <img src={image3} alt="assets" />
              </Card>
              <h2>Dipped Tripod Stool</h2>
              <h2>
                <span>$49.95</span>
              </h2>

              <Button type="button" Text={"Add to cart"} />
            </Box>

            <Box>
              <Card>
                <img src={image4} alt="assets" />
              </Card>
              <h2>Dipped Tripod Stool</h2>
              <h2>
                <span>$49.95</span>
              </h2>

              <Button type="button" Text={"Add to cart"} />
            </Box>

            <Box>
              <Card>
                <img src={image5} alt="assets" />
              </Card>
              <h2>Dipped Tripod Stool</h2>
              <h2>
                <span>$49.95</span>
              </h2>

              <Button type="button" Text={"Add to cart"} />
            </Box>

            <Box>
              <Card>
                <img src={image6} alt="assets" />
              </Card>
              <h2>Dipped Tripod Stool</h2>
              <h2>
                <span>$49.95</span>
              </h2>

              <Button type="button" Text={"Add to cart"} />
            </Box>
          </Content>
        </Body>
      </Container>

      <Infos>
        <h1>Ready to take your next step?</h1>
        <p>Grow your audience and build a profitable online business.</p>
        <div>
          <Button Text={"Learn More"} />
          <Button blue Text={"Get Started Today"} />
        </div>
      </Infos>

      <Footer>
        <div>
          <a>FACEBOOK</a>
          <a>TWITTER</a>
          <a>INSTAGRAM</a>
          <a>LINKEDIN</a>
          <a>DRIBBBLE</a>
        </div>

        <div>
          <p>Copyright © 2020 · WordPress · Log in</p>
        </div>
      </Footer>
    </>
  );
};

export default App;

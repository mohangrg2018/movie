import Header from "@/components/Header";
import "./globals.css";
import Provider from "@/components/Provider";
import Nav from "@/components/Nav";
import SearchMovie from "@/components/SearchMovie";

export const metadata = {
  title: "Movie Database",
  description: "Discover TopRated and Trending Movies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          {/* HEADER */}
          <Header />

          {/* NAV */}
          <Nav />

          {/* SEARCH */}
          <SearchMovie />
          {children}

          {/* FOOTER */}
        </Provider>
      </body>
    </html>
  );
}

import FlightSearchForm from "./components/SearchFligth";

export default function Home() {
  return (
    <div className="font-sans grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h2>Soy un clon de google flight</h2>
      <FlightSearchForm />
    </div>
  );
}

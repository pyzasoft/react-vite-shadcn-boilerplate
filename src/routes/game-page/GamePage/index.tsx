import GameLoading from "@/components/feature-specific/loaders/GameLoading";

export const GamePage = () => {
  return (
    <div>
      <GameLoading visible onHide={() => {}} />
    </div>
  );
};

export default GamePage;

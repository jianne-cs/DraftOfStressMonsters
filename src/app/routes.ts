import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Battle } from "./pages/Battle";
import { Progress } from "./pages/Progress";
import { Community } from "./pages/Community";
import { Learn } from "./pages/Learn";
import { Layout } from "./components/Layout";
import { CoopBattle } from "./pages/CoopBattle";
import { SquadDetail } from "./pages/SquadDetail";
import { MonsterDiary } from "./pages/MonsterDiary";
import { CreateMonster } from "./pages/CreateMonster";
import { MonsterProfile } from "./pages/MonsterProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "battle/:monsterId?", Component: Battle },
      { path: "coop-battle/:battleId", Component: CoopBattle },
      { path: "progress", Component: Progress },
      { path: "monster-diary/:monsterId", Component: MonsterDiary },
      { path: "monster-profile/:monsterId", Component: MonsterProfile },
      { path: "create-monster", Component: CreateMonster },
      { path: "community", Component: Community },
      { path: "squad/:squadId", Component: SquadDetail },
      { path: "learn", Component: Learn },
    ],
  },
]);
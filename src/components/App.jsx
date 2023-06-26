import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "redux/operations";
import Bar from "./addBar";
import List from "./contactList";
import { SPINNER } from "./spiner/spinner";

export const App = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <SPINNER/>}
      {error && <b>{error}</b>}
      <Bar />
      <List loading={isLoading}/>
    </div>
  );
};

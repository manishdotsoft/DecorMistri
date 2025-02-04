import { useState, useEffect } from 'react';
// import { fetchProjectListQuery } from "../../graphql/query/projectList";
import { useDispatch } from 'react-redux';
// import { setProjects } from "../../store/reducers/projectDataSlice";

export const useDashboardLogic = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // const projectData = await fetchProjectListQuery(2);
        // if (projectData) {
        //     dispatch(setProjects(projectData));
        // }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [dispatch]);

  return {
    loading,
    error,
  };
};

import { useCallback, useMemo, useState } from "react";

const useHandleFilter = () => {
  const [openFilter, setOpenFilter] = useState(false);

  const requestStatus = (openning: boolean) => {
    setOpenFilter(openning);
  };

  const handleOpenFilter = useCallback(() => {
    setOpenFilter(true);
    requestStatus(false);
  }, []);

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const value = useMemo(() => {
    return { openFilter };
  }, [openFilter]);

  return {
    value,
    handleOpenFilter,
    handleCloseFilter,
  };
};

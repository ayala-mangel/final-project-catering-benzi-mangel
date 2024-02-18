import {
  Box,
  Button,
  Checkbox,
  Divider,
  Drawer,
  FormControlLabel,
  FormGroup,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import FilterListIcon from "@mui/icons-material/FilterList";

export const EVENT = ["wedding", "small", "big"];

type Props = {
  openFilter?: boolean;
  onOpenFilter?: (...args: any[]) => any;
  onCloseFilter?: (...args: any[]) => any;
};

export const ProductFilters: React.FC<Props> = ({
  openFilter,
  onOpenFilter,
  onCloseFilter,
}) => {
  const renderEvent = (
    <Stack spacing={1}>
      <Typography variant="subtitle2">Gender</Typography>
      <FormGroup>
        {EVENT.map((item) => (
          <FormControlLabel key={item} control={<Checkbox />} label={item} />
        ))}
      </FormGroup>
    </Stack>
  );
  return (
    <>
      <Button
        disableRipple
        color="inherit"
        endIcon={<FilterListIcon />}
        onClick={onOpenFilter}
      >
        Filters&nbsp;
      </Button>
      <Drawer
        anchor="right"
        open={openFilter}
        onClose={onCloseFilter}
        PaperProps={{
          sx: { width: 280, border: "none", overflow: "hidden" },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: 1, py: 2 }}
        >
          <Typography variant="h6" sx={{ ml: 1 }}>
            Filters
          </Typography>
          <IconButton onClick={onCloseFilter}>
            <FilterListIcon />
          </IconButton>
        </Stack>

        <Divider />

        <Box>
          <Stack spacing={3} sx={{ p: 3 }}>
            {renderEvent}
          </Stack>
        </Box>

        <Box sx={{ p: 3 }}>
          <Button
            fullWidth
            size="large"
            type="submit"
            color="inherit"
            variant="outlined"
            startIcon={<FilterListIcon />}
          >
            Clear All
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

/* ProductFilters.propTypes = {
  openFilter: PropTypes.bool,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
}; */

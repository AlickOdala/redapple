import React, { Component, ErrorInfo, ReactNode } from "react";
import { Paper, Typography, Toolbar, Box, Button } from "@mui/material";

interface Props {
  children: ReactNode;
}
interface State {
  hasError: boolean;
}

class GuardError extends Component<Props, State> {
  public state: State = { hasError: false };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Guard Error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Box className='p-rel vh center-items'>
          <Paper
            sx={{
              margin: " auto !important",
              padding: "16px !important",
              maxHeight: "40%",
              width:'72%'
            }}
            className=" center-items text p-rel "
          >
            <Typography className="  text " >Guard Found error</Typography>
            <Button onClick={() => this.setState({ hasError: false })}>
              Try again
            </Button>
          </Paper>
        </Box>
      );
    }
    return this.props.children;
  }
}

export const ErrorGuard = ({ children }: { children: React.ReactNode }) => {
  try {
    return <Box>{children}</Box>;
  } catch (e: unknown) {
    console.error(e);
    return (
      <Paper
        sx={{ margin: "50% 20%  !important" }}
        className="self-center p-abs text"
      >
        {" "}
        Something Went wrong:{(e as Error).message}
      </Paper>
    );
  }
};

export default GuardError;

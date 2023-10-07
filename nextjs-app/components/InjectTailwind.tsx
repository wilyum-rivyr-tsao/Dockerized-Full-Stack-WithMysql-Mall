import {ReactNode} from "react";
import { StyledEngineProvider } from "@mui/material/styles";

export default function InjectTailwind({ children }:{children?:Element}) {
	return <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>;
}
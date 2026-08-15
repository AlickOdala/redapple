import {
  Box,
  Paper,
  Typography,
  IconButton,
  Button,
  Stack,
  ImageListItem,
  Skeleton,
  styled,
  Collapse,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ImageList,
} from "@mui/material";
import { motion } from "framer-motion";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Image } from "mui-image";
import image from "../../assets/webuse/homebg/bg1.webp";
import Lightbox from "yet-another-react-lightbox";
import {
  ArrowBackIos,
  ArrowDownward,
  ArrowForward,
  ArrowForwardIos,
  ArrowUpward,
  Call,
  Email,
  Face,
  Facebook,
  Instagram,
  WhatsApp,
  X,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useTheme, Theme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import RandomPick, { RandomNumber } from "../../../scripts/randomPick";

//================================================================================
// .Props
//================================================================================
interface HeadTextProps {
  center?: boolean;
  fx?: number;
  fm?: number;
  color?: string;
  text?: string;
  caps?: boolean;
}
interface CardProps {
  children?: React.ReactElement;
  shadow?: boolean;
  ratio?: number;
}
interface CardMediaProp {
  onClick?: () => void;
  src?: string;
  details?: boolean;
  ratio?: number;
}
interface MediaItem {
  id: string;
  name: string;
  url: string;
  ext: string;
  ratio?: number;
}
interface ImageProp {
  src?: MediaItem[];
  srcset?: MediaItem[];
  i?: number;
  key?: string | number;
  ratio?: number;
  cover?: boolean;
}
interface SectinProps {
  children?: React.ReactElement;
  text?: string;
  color?: string;
}
interface BulleteTextProp {
  texts?: string[] | string;
  gs?: number;
  bgcolor?: string;
  setClicked: Dispatch<SetStateAction<string>>;
}

//================================================================================
//. Layoput Compontent | HeadText | Text | Card | Section | Bollets
export const LuiHeadText = ({
  center = false,
  fx = 24,
  fm = 2,
  text,
  color,
  caps = false,
}: HeadTextProps) => {
  return (
    <Box className="" sx={{ py: 1 }}>
      <Typography
        className=""
        sx={{
          lineHeight: 1.1,
          fontWeight: "bold",
          textAlign: center ? "center" : center,
          color: !color ? "text.secondary" : color,
          fontSize: {
            xs: `${fx}px`,
            sm: `${fx * fm}px`,
          },
          letterSpacing: "-0.02em",
        }}
      >
        {caps ? text?.toUpperCase() : text}
      </Typography>
    </Box>
  );
};

export const LuiText = ({
  center = false,
  fx = 16,
  fm = 2,
  text,
  color,
  caps = false,
}: HeadTextProps) => {
  return (
    <Box className="" sx={{ py: 1 }}>
      <Typography
        className=""
        sx={{
          lineHeight: 1.1,
          textAlign: center ? "center" : center,
          color: !color ? "text.secondary" : color,
          fontSize: {
            xs: `${fx}px`,
            sm: `${fx * fm}px`,
          },
          letterSpacing: "-0.02em",
        }}
      >
        {caps ? text?.toUpperCase() : text}
      </Typography>
    </Box>
  );
};

export const LuiCard = ({ children, shadow, ratio }: CardProps) => {
  return (
    <Paper
      className="p-rel"
      sx={{
        width: "100%",
        aspectRatio: !ratio ? { xs: 3 / 3.1, sm: 4 / 3 } : ratio,
        borderRadius: "16px",
        pt: 3,
        px: 1,
        pb: 2,
        boxShadow: !shadow ? "unset" : 3,
        bgcolor: "transparent",
        backgroundImage:
          "linear-gradient(45deg, rgba(118, 44, 51, 0.15), transparent )",
        display: "flex",
        flexFlow: "column",
        gap: 2,
        //backdropFilter: "blur(5px)",
      }}
    >
      {children}
    </Paper>
  );
};

export const Section = ({ children, text, color }: SectinProps) => {
  return (
    <Box
      className="p-rel "
      sx={{
        height: "auto",
        px: 2,
        pt: !text ? 0 : 4,
        pb: 1,
      }}
    >
      {text && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          vieport={{ ammount: 1.5 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          <Box
            className=""
            sx={{
              display: "flex",
              position: "absolute",
              top: 18,
              //width: "10%",
              px: 1,
              py: 0.1,
              backdropFilter: "blur(80px)",
              zIndex: 10,
            }}
          >
            <LuiHeadText text={text} caps fx={9} color={color} />
          </Box>
          <Box
            component="hr"
            className=""
            sx={{
              width: "100% !important",
              right: "10%",
              border: "0.5px solid #2323233c !important",
              height: "0.5px !important",
            }}
          />
        </motion.div>
      )}

      <Box className="" sx={{ pt: 4, display:'flex', flexFlow:"column", gap:4 }}>
        {children}
      </Box>
    </Box>
  );
};
export const LuiBulleteText = ({
  texts,
  gs = 6,
  bgcolor,
  setClicked,
}: BulleteTextProp) => {
  const [initial, setInitial] = useState("");

  useEffect(() => {
    setInitial(texts[0]);
  }, []);

  useEffect(() => {
    console.log("initial", initial);
    setClicked(initial);
  }, [initial]);

  const hundleClick = (value: string) => {
    setInitial(value);
  };

  return (
    <Grid container className="" spacing={0.3}>
      {texts.map((text) => {
        return (
          <Grid
            className=""
            size={{ xs: gs, sm: gs / 2 }}
            sx={{ height: "fit-content !important" }}
          >
            <Box
              onClick={() => hundleClick(text)}
              className=""
              sx={{
                bgcolor: !bgcolor ? "rgba(149, 63, 63, 0.21)" : bgcolor,
                py: 0.3,
                borderRadius: "4px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "10px",
                  fontWeight: "bolder",
                  textSpacing: "-0.2rem",
                  textAlign: "center",
                  height: "fit-content",
                  color: "text.secondary",
                }}
              >
                {text ?? ""}
              </Typography>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};
//================================================================================
// .Media componets | Card | Images
export const LuiCardMedia = ({
  onClick,
  src,
  details = false,
  ratio,
}: CardMediaProp) => {
  return (
    <Box
      className="p-rel"
      sx={{
        py: 1,
        height: "auto",
        display: "flex",
        flexFlow: "column",
        gap: 1,
        ratio: ratio,
      }}
    >
      <Box
        className=" p-rel"
        sx={{
          aspectRatio: { xs: 4 / 3 },
          borderRadius: "16px",
        }}
      >
        <Image
          src={src?.url ?? "/logo/logo.webp"}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "50% 15%",
            position: "absolute !important",
            top: 0,
            lef: 0,
            bgcolor: "rgba(130, 28, 38, 0.11)",
          }}
        />
      </Box>
      {details && (
        <Stack
          className=""
          sx={{ height: "64px", py: 1, justifyContent: "space-between" }}
          spacing={1}
          direction={{ xs: "row", sm: "column" }}
        >
          <Box className="" sx={{ display: "flex", gap: 1 }}>
            <Box
              component="img"
              src={src?.logo ?? "/logo/logo.webp"}
              className=""
              sx={{
                width: "30px",
                height: "30px",
                p: 0.3,
                borderRadius: "4px",
                bgcolor: "#63636330",
              }}
            />
            <Box className="">
              <Typography
                className=""
                sx={{
                  fontWeight: "bold",
                  fontSize: "12px",
                  letterSpacing: "-0.02em",
                }}
              >
                {"RedApple" || src?.comp}
              </Typography>
              <Typography
                className=""
                sx={{ fontSize: "10px", letterSpacing: "-0.02em" }}
              >
                Shot Date
              </Typography>
            </Box>
          </Box>
          <Box className="" onClick={onClick}>
            <Typography
              sx={{
                borderRadius: "16px",
                px: 1,
                fonSize: { xs: "18px" },
                bgcolor: "primary.main",
                color: "primary.contrastText",
                letterSpacing: "-0.02em",
              }}
            >
              {src?.name ?? ""}
            </Typography>
          </Box>
        </Stack>
      )}
    </Box>
  );
};
export const LuiImage = ({ src, srcset, i, key, ratio }: ImageProp) => {
  const [load, setLoad] = useState(false);
  const [index, setIndex] = useState(-1);

  const slides =
    srcset ??
    [].filter((itm) => itm.ext === "webp").map((itm) => ({ src: itm.src }));

  return (
    <Box
      key={key ?? ""}
      className=" p-rel"
      sx={{
        borderRadius: "8px",
        marginBottom: "8px !important",
      }}
    >
      <ImageListItem key={src?.id ?? ""} className="p-rel">
        <Box
          className=" p-rel"
          sx={{
            aspectRatio: !ratio ? "none" : ratio,
            objectFit: "fill",
            objectPosition: "top",
            width: "100% !important",
            display: "flex",
            minHeight: !load && "90px",
            bgcolor: "#2d2c2c31",
          }}
        >
          {!load && (
            <Skeleton variant="rectangular" width="100%" height="100%" />
          )}
          <Image
            key={src?.id ?? ""}
            src={src}
            loading="lazy"
            decoding="async"
            onLoad={() => setLoad(true)}
            zoom
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: load[src?.id ?? ""] ? 1 : 0,
              transition: "opacity 0.3s",
            }}
            onClick={() => setIndex(i ?? "")}
          />
        </Box>
      </ImageListItem>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        carousel={{ finite: false }}
        controller={{ closeOnBackDropClick: true }}
      />
    </Box>
  );
};

export const LuiMediaSlide = ({ images }: { images: string[] }) => {
  const length = images.length;
  const theme: Theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only("xs"), { noSsr: true });
  const sm = useMediaQuery(theme.breakpoints.only("sm"), { noSsr: true });
  const cols = xs ? 2 : sm ? 3 : 3;
  const [current, setCurrent] = useState(RandomNumber(0, length));

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || length <= 0) return null;

  return (
    <Box
      className=""
      sx={{
        aspectRatio: { xs: 3 / 4.5, sm: 9 / 4.5 },
        pt: 1,
        pb: 4,
        height: { sm: "fit-content" },
      }}
    >
      <Stack
        className=""
        direction="row"
        sx={{ flexWrap: { sm: "wrap" }, height: "100%", gap: 4 }}
        spacing={2}
      >
        <ImageList
          variant="masonry"
          className=""
          gap={8}
          cols={cols}
          sx={{
            height: "auto !important",
            padding: "4px 0 0",
            display: { xs: "none", sm: "block" },
          }}
        >
          {RandomPick(images, 10)
            .slice(0, 3)
            .map((img) => (
              <LuiImage src={img.src} ratio={3 / 4} srcset={images} />
            ))}
        </ImageList>

        <Box
          className=" p-rel"
          sx={{
            height: { xs: "100%", sm: 320 },
            width: { xs: "100%", sm: 250 },
            aspectRatio: { sm: 3 / 4 },
            borderRadius: "16px",
            display: { sm: "none" },
          }}
        >
          <Box
            className=" p-rel"
            sx={{
              pb: 1,
              height: { xs: "85%", sm: "100%" },
              borderRadius: "0 0 16px 16px",
              display: { sm: "none" },
            }}
          >
            <Image
              src={images[current].src}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "50% 15%",
                position: "absolute !important",
                top: 0,
                lef: 0,
                bgcolor: "rgba(130, 28, 38, 0.11)",
              }}
            />
          </Box>
          <Box
            className=""
            sx={{
              py: 1,
              px: 2,
              display: "flex",
              height: "15%",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Box className=" p-rel center-items">
              <IconButton onClick={prevSlide}>
                <ArrowBackIos sx={{ transform: "scale(0.8)" }} />
              </IconButton>
            </Box>
            <Box className=" p-rel center-items">
              <IconButton onClick={nextSlide}>
                <ArrowForwardIos sx={{ transform: "scale(0.8)" }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

//================================================================================
// .function UI Compmps | button | bgWrapper
//================================================================================
interface ButtonProps {
  text?: string;
  onClick?: () => void;
  bgcolor?: string;
  txtcolor?: string;
  center?: boolean;
  type?: string;
}

interface BgWraperProps {
  image: string;
  filter?: string;
  parallax?: boolean;
  overlay?: number;
}

interface CollapseProps {
  services?: Record<string, any>;
  showImage?: boolean;
  bgcolor?: string;
}
//================================================================================
export const LuiButton = ({
  text,
  onClick,
  bgcolor,
  txtcolor,
  center = false,
  type,
}: ButtonProps) => {
  return (
    <Box
      className=" center-items p-rel "
      onClick={onClick}
      sx={{
        width: "fit-content",
        borderRadius: "50px !important",
        bgcolor: !bgcolor ? "primary.main" : bgcolor,
        height: "30px",
        color: !bgcolor ? "primary.contrastText" : "text.secondary",
        border: txtcolor ? ` 1px solid ${txtcolor}` : "none",
        px: 0.5,
        "&:active": {
          bgcolor: "primary.main",
          color: "text.main",
        },
        margin: center && "auto !important",
      }}
    >
      <IconButton
        type={type}
        sx={{
          // fontWeight: "bold",
          textAlign: "center",
          fontSize: "14px",
          color: !bgcolor ? "primary.contrastText" : txtcolor,
          letterSpacing: "-0.02em",
        }}
      >
        {text}
      </IconButton>
    </Box>
  );
};

export const LuiBgImage = styled(Box)<BgWraperProps>(
  ({ image, filter, parallax, overlay = 0.5 }) => ({
    position: "relative",
    backgroundColor: "transparent",
    zIndex: 0,
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundImage: `linear-gradient(rgba(0, 0, 0, ${overlay}), transparent ,rgba(67, 67, 67, ${overlay})), url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "top",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: !parallax ? "fixed" : "scroll",
      filter: filter || "none",
      zIndex: -1,
    },
    "& > *": {
      position: "relative",
      zIndex: 1,
    },
  }),
);

export const LuiCollapse = ({
  services,
  showImage,
  bgcolor,
}: CollapseProps) => {
  const [open, setOpen] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleToggle = (key: string) => {
    setOpen(open !== key ? key : null);
  };

  return (
    <Box className=" p-rel" sx={{ pt: 4 }}>
      {Object.entries(services).map(([service, value], i) => (
        <Grid container className="" spacing={3} key={service}>
          <Grid className="" size={{ xs: 12, sm: 4 }}>
            <ListItemButton
              onClick={() => handleToggle(service)}
              sx={{
                bgcolor: bgcolor,
                borderBottom: "0.5px solid grey",
              }}
            >
              <ListItemText
                primary={service}
                sx={{
                  color:
                    bgcolor !== "primary.main"
                      ? "text.secondary"
                      : "primary.contrastText",
                  fontWeight: "bolder !important",
                }}
              />
              <ListItemIcon>
                {open !== service ? (
                  <ArrowDownward
                    sx={{
                      color:
                        bgcolor !== "primary.main"
                          ? "text.secondary"
                          : "primary.contrastText",
                      transform: "scale(0.8)",
                    }}
                  />
                ) : (
                  <ArrowUpward
                    sx={{
                      color:
                        bgcolor !== "primary.main"
                          ? "text.secondary"
                          : "primary.contrastText",
                      transform: "scale(0.8)",
                    }}
                  />
                )}
              </ListItemIcon>
            </ListItemButton>
            <Collapse in={open === service} className="" timeout={1500}>
              <List dense sx={{ px: 2 }}>
                <LuiText text={value.desc ?? value} />
                <Box
                  className=" p-rel"
                  sx={{
                    aspectRatio: { xs: 4 / 3 },
                    borderRadius: "16px",
                    display: !showImage && "none",
                  }}
                >
                  <Image
                    src={value.url ?? "/logo/logo.webp"}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "50% 15%",
                      position: "absolute !important",
                      top: 0,
                      lef: 0,
                      bgcolor: "rgba(130, 28, 38, 0.11)",
                    }}
                  />
                </Box>

                <Box
                  className=" right center-items"
                  sx={{ display: !showImage && "none" }}
                >
                  <LuiButton
                    onClick={() => navigate(`/service/${service}`)}
                    text={`${service} Services |`}
                    bgcolor="transparent"
                    txtcolor="text.secondary"
                  />
                </Box>
              </List>
            </Collapse>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export const LuiCollapseText = () => {
  <Box className=" p-rel" sx={{ pt: 4 }}>
    {Object.entries(services).map(([service, value], i) => (
      <Grid container className="" spacing={3} key={service}>
        <Grid className="" size={{ xs: 12, sm: 4 }}>
          <ListItemButton
            onClick={() => handleToggle(service)}
            sx={{
              bgcolor: "primary.main",
              borderBottom: "0.5px solid grey",
            }}
          >
            <ListItemText
              primary={service}
              sx={{
                color: "primary.contrastText",
                fontWeight: 1000,
              }}
            />
            <ListItemIcon>
              {open !== service ? (
                <ArrowDownward
                  sx={{
                    color: "primary.contrastText",
                    transform: "scale(0.8)",
                  }}
                />
              ) : (
                <ArrowUpward
                  sx={{
                    color: "primary.contrastText",
                    transform: "scale(0.8)",
                  }}
                />
              )}
            </ListItemIcon>
          </ListItemButton>
          <Collapse in={open === service} className="" timeout={1500}>
            <List dense sx={{ px: 2 }}>
              <LuiText text={value.desc ?? ""} />
              <Box
                className=" p-rel"
                sx={{
                  aspectRatio: { xs: 4 / 3 },
                  borderRadius: "16px",
                }}
              >
                <Image
                  src={value.url ?? "/logo/logo.webp"}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "50% 15%",
                    position: "absolute !important",
                    top: 0,
                    lef: 0,
                    bgcolor: "rgba(130, 28, 38, 0.11)",
                  }}
                />
              </Box>
              <Box className=" right center-items" sx={{}}>
                <LuiButton
                  onClick={() => navigate(`/service/${service}`)}
                  text={`${service} Services |`}
                  bgcolor="transparent"
                  txtcolor="text.secondary"
                />
              </Box>
            </List>
          </Collapse>
        </Grid>
      </Grid>
    ))}
  </Box>;
};

export const LuiContactButton = ({ i, item }: { item: string; i: number }) => {
  const variant = {
    tile: {
      width: 60,
      aspectRatio: 1 / 1,
      display: "flex",
      flexFlow: "column",
      gap: 1,
      padding: "8px !important",
      textDecoration: "unset",
      boxShadow: 1,
      bgcolor: "grey.300",
      color: "#797979",
      borderRadius: "4px",
    },
    icon: {
      transform: "scale(1.5)",
    },
  };

  const icon = {
    whatsapp: <WhatsApp sx={variant.icon} />,
    call: <Call sx={variant.icon} />,
    x: <X sx={variant.icon} />,
    email: <Email sx={variant.icon} />,
    facebook: <Facebook sx={variant.icon} />,
    instagram: <Instagram sx={variant.icon} />,
  };

  return (
    <>
      <motion.div
        key={i}
        initial={{ x: -40 }}
        whileInView={{ x: 0 }}
        transition={{
          duration: 0.4 * i,
          delay: 0.3,
        }}
        viewport={{ once: true }}
      >
        <Box
          component="a"
          className="p-rel center-items"
          sx={variant.tile}
          href={item.url}
          target="_none"
          rel="noopener noreferrer"
        >
          <Box
            className="center-items center-self"
            sx={{
              height: "40%",
              width: "40%",
              alignItems: "center",
              display: "flex",
            }}
          >
            {icon[item.name.toLowerCase()]}
          </Box>
        </Box>
      </motion.div>
    </>
  );
};

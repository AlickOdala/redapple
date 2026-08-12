import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Stack,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  styled,
  CircularProgress,
  Dialog,
  Input,
  ImageListItem,
  Skeleton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  ExpandLess,
  ExpandMore,
  ChevronRight,
  Key,
  Facebook,
  WhatsApp,
  Call,
  Email,
  X,
  Instagram,
  LocationOn,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { Image } from "mui-image";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { useNavigate, useNavigation } from "react-router-dom";
import RedAppleName from "./redapplename";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import image from "../../assets/webuse/loading/loading.webp";

export const RecursiveMenu = ({
  item,
  setSlide,
}: {
  item: any;
  setSlide?: () => void;
}) => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const menuList = item ?? "";
  const [shed, setShed] = useState(null);

  const handleClick = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const navigate = useNavigate();
  const hundleNavigate = (value: any) => {
    navigate(value);
    setSlide(false);
  };

  return (
    <List disablePadding>
      {Object.entries(menuList).map(([key, value]) => {
        const isObject = typeof value === "object" && value !== null;
        const isOpen = openItems[key]; //

        if (isObject) {
          return (
            <Stack key={key} spacing={1}>
              <ListItemButton
                onClick={() => handleClick(key)}
                sx={{
                  borderBottom: "0.5px solid grey",
                }}
              >
                <ListItemIcon>
                  {isOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemIcon>
                <ListItemText primary={key} />
              </ListItemButton>

              <Collapse key={key} in={isOpen} timeout="auto" unmountOnExit>
                <List disablePadding className="">
                  {value.map((item) => (
                    <ListItemButton
                      sx={{
                        //color: "primary.contrastText",
                        bgcolor: "text.secondary",
                        //fontSize: "11px !important",
                        padding: "0 0 0 60px",
                        margin: "2px !important",
                      }}
                    >
                      <ListItemText
                        sx={{
                          fontSize: "8px !important",
                        }}
                        primary={item}
                        //onClick={() => setOpenItems({})}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </Stack>
          );
        }
        if (!isObject) {
          return (
            <Stack className="" key={key}>
              <ListItemButton
                onClick={() => setShed(key ? key : null)}
                sx={{
                  bgcolor: shed === key ? "primary.main" : "transparent",
                  borderBottom: "0.5px solid grey",
                }}
              >
                <ListItemIcon />
                <ListItemText
                  sx={{
                    color: "white",
                    fontWeight: "bolder",
                    "& .MuiListItemText": {},
                  }}
                  primary={key}
                  onClick={() => hundleNavigate(value)}
                />
              </ListItemButton>
            </Stack>
          );
        }
      })}
    </List>
  );

  return (
    <ListItemButton key={key} sx={{}}>
      <ListItemText primary={`${key} : ${value}`} />
    </ListItemButton>
  );
};

export const MenuButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <RecursiveMenu items={data} />
    </Box>
  );
};

export default function ImageCard({
  data,
  onClick,
  content,
}: {
  data?: any;
  onClick?: () => void | undefined;
  content: boolean;
}) {
  const [imgView, setImgView] = useState("");
  const { url } = data; // distructured

  const variant = {
    container: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      bgcolor: "black",
      borderRadius: "0",
    },
    image: {
      objectPosition: "top",
      width: "100%",
      objectFit: "cover",
      aspectRatio: 1 / 1,
      flexShrink: 0,
      filter: "opacity(0.2)",
      zIdenx: 1,
    },
    content: {
      padding: "4px",
      height: "40px",
      display: `${!content && "none"}`,
    },
    text: {
      fontSize: "10px !important",
      fontWeight: "bolder",
      color: "text.secondary",
    },
  };

  return (
    <Card
      className={`${!data && "skeleton center-items"}`}
      onClick={onClick}
      sx={variant.container}
    >
      <CardMedia
        component="img"
        image={data}
        alt={name ?? ""}
        loading="lazy"
        sx={variant.image}
        //onClick={() => setOpenView(true)}
      />
      <CardContent className="" sx={variant.content}>
        <Box className="">
          <Typography sx={variant.text}>{name ?? ""}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export const HeadText = ({
  text,
  color,
  fs,
  center,
}: {
  text: string;
  color?: string;
  fs?: number;
  center?: boolean;
}) => {
  return (
    <Box className="fh center-items">
      <Typography
        className=""
        sx={{
          textAlign: `${center && "center"}`,
          fontSize: `${!fs ? "20" : fs}px`,
          fontWeight: "bolder",
          color: !color ? "text.secondary" : color,
          lineHeight: 1,
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export const TextContext = ({
  text,
  sx,
  fs,
  className,
  center,
  color,
}: {
  text: string;
  fs?: number;
  sx?: any;
  className?: string;
  center?: boolean;
  color?: string;
}) => {
  return (
    <Box className={className} sx={sx}>
      <Typography
        sx={{
          textAlign: `${center && "center"}`,
          lineHeight: 1,
          fontSize: { xs: `${!fs ? "16" : fs}px`, sm: `${fs ? fs : "18"}px` },
          color: !color ? "text.secondary" : color,
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export const TextIcon = ({
  rootProp,
  textProp,
  text,
  icon,
  onClick,
  className,
  type,
}: {
  rootProp?: {};
  textProp?: {};
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: any;
  text?: string;
  type?: string;
}) => {
  return (
    <Box className={className} onClick={onClick} sx={rootProp}>
      <IconButton className="" sx={textProp} type={type}>
        {text} {icon}
      </IconButton>
    </Box>
  );
};

export const DataSelector = ({
  toFilter,
  filtered,
  bolder,
}: {
  toFilter: string;
  filtered?: () => void;
  bolder: boolean;
}) => {
  const [filter, setFilter] = useState("");

  useEffect(() => {
    filtered(filter);
  }, [filter]);

  return (
    <Stack
      className=" red p-rel"
      sx={{
        alignContent: "center",
        flexWrap: "wrap",
        display: "flex",
        gap: 1,
        height: 40,
      }}
      direction={"row"}
      spacing={2}
    >
      <Box className="p-rel " sx={{ justifyContent: "end !important" }}>
        <Box
          className=""
          sx={{
            width: "fit-content",
            borderRadius: `${bolder && "50px !important"}`,
            display: "flex",
            height: "100% !important",
          }}
        >
          <Box
            component="select"
            onChange={(e) => setFilter(e.target.value)}
            value={!filter ? "Service Categories" : filter}
            sx={{
              bgcolor: "transparent",
              color: "text.secondary",
              fontSize: "11px",
              outline: "unset !important",
              border: "none",
            }}
          >
            {/* <Box component={"option"}>
              {filter === "All" ? setFilter("") : "All"}
            </Box>*/}

            {Object.values(toFilter).map((cat) => (
              <Box component={"option"} key={cat} value={cat}>
                {cat}
              </Box>
            )) ?? "Search"}
          </Box>
        </Box>
      </Box>
      <Box className="  right">
        <Typography
          className=""
          onClick={() => setFilter(!filter)}
          sx={{
            fontSize: "11px",
            fontWeight: "bolder",
            textAlign: { sm: "center" },
          }}
        >
          {"Filter By Services"}
        </Typography>
      </Box>
    </Stack>
  );
};

export const ContactItem = ({
  link,
  name,
  linkTo,
  text,
  index,
}: {
  link?: string;
  name?: String;
  linkTo?: string;
  text?: string;
  index: number;
}) => {
  const variant = {
    container: {
      height: 50,
      boxSizing: "bolderBox",
      position: "relative",
      px: 1,
      display: "flex",
      boxShadow: 3,
      borderRadius: "8px",
      color: "text.secondary",
    },

    icon: {
      transform: "scale(1.5)",
      margin: "auto !important",
    },
    a: {
      textDecoration: "none !important",
      color: "inherit !important",
      outline: "unsert",
      height: "12px ",
      padding: "0 !important",
      margin: "auto !important",
      fontSize: "18px",
      fontWeight: "bolder",
      border: "unsert !important",
    },
    text: {
      fontWeight: "small !important",
      fontSize: "14px",
      padding: "0 8px",
      fontStyle: "italic",
    },
  };

  const navigate = useNavigation();
  const icon = {
    whatsapp: <WhatsApp sx={variant.icon} />,
    call: <Call sx={variant.icon} />,
    x: <X sx={variant.icon} />,
    email: <Email sx={variant.icon} />,
    facebook: <Facebook sx={variant.icon} />,
    instagram: <Instagram sx={variant.icon} />,
    location: <LocationOn sx={variant.icon} />,
  };
  const hundleLicks = (name: string) => {
    console.log("name", name);
  };

  return (
    <LandingPage>
      <Box key={index} className=" p-rel" sx={variant.container}>
        <Box
          className=" red center-items"
          sx={{
            aspectRatio: 1 / 1,
            height: "100%",
            boxSizing: "bolder-box",
            display: "flex",
          }}
        >
          {icon[name.toLocaleLowerCase()]}
        </Box>
        <Box className=" grow" sx={{ pb: 1 }}>
          <Box
            component={"a"}
            href={link}
            className=" p-rel"
            sx={variant.a}
            target="_blank"
            rel="noopener noreferrer"
          >
            {name}
          </Box>
          <Box
            className=""
            sx={{
              display: "flex",
              width: "100% !important",
              justifyContent: "space-between",
            }}
          >
            <Typography
              className=""
              sx={{ fontWeight: "bold", fontSize: "12px" }}
            >
              {name?.toLowerCase() === "whatsapp".toLowerCase() ? text : linkTo}
            </Typography>
          </Box>
        </Box>
      </Box>
    </LandingPage>
  );
};
/**
 * 
       
 */

//====================================================================================
// .tile Contacts
//====================================================================================
export const TileContactItem = ({ i, item }: { item: string; i: number }) => {
  const variant = {
    tile: {
      height: 120,
      width: 120,
      alignItems: "center",
      borderRadius: "4px",
      bgcolor: "primary.main",
      color: "primary.contrastText",
      padding: "8px 8px 16px",
      zIndex: 10,
      textDecoration: "none !important",
      outLine: "none",
    },
    icon: {
      transform: "scale(2)",
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
          className="p-rel 
            center-items"
          sx={variant.tile}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            className=" center-items"
            sx={{
              height: "60%",
              width: "60%",
              alignItems: "center",
              display: "flex",
            }}
          >
            {icon[item.name.toLowerCase()]}
          </Box>
          <Box className=" red center-items" sx={{ lineHieght: 1 }}>
            <Typography
              className="center-self"
              sx={{
                lineHieght: 0.5,
                fontSize: "8px",
                fontWeight: "bolder",
              }}
            >
              Click to {item.action}
            </Typography>
          </Box>
        </Box>
      </motion.div>
    </>
  );
};

export const FfpNavList = () => {
  const handleView = () => {
    const a = document.createElement("a");
    a.href = "http://wa.me";
  };

  const links = [
    { id: "#profile", text: "About US" },
    { id: "#services", text: "What i Can Help You" },
    { id: "#images", text: "Sumples" },
    { id: "#contacts", text: "Contact Us Today" },
    { id: "#guide", text: "How to Send Work" },
  ];

  return (
    <Stack
      className="red"
      direction={{ xs: "row", sm: "column" }}
      spacing={2}
      sx={{
        flexWrap: "wrap",
      }}
    >
      <Typography
        sx={{
          fontWeight: "bolder",
          fontSize: "18px",
          color: "text.secondary",
          margin: "16px 0 !important",
          display: {
            xs: "none",
            sm: "block",
          },
        }}
      >
        Go Direct To Page:
      </Typography>
      {links.map((link) => (
        <Box
          key={link.id}
          component={"a"}
          href={link.id}
          className=" p-rel"
          target="_self"
          sx={{
            height: "fit-content",
            minWidth: "90px",
            maxWidth: "fit-content",
            margin: "3px !important",
            outline: "unset !important",
            textDecoration: "none",
            borderRadius: "50px",
            color: "text.primary",
          }}
        >
          <TextIcon
            text={"text"}
            //onClick={() => handleNavigate}
            className="center-self"
            rootProp={{
              borderRadius: "50px !important",
              border: "1px solid",
              width: "fit-content",
              height: "30px",
            }}
            textProp={{
              fontSize: "11px",
              textAlign: "center",
              fontWeight: "bolder",
              width: "100%",
            }}
          />
        </Box>
      ))}
    </Stack>
  );
};

export const TextContentbillets = ({ text }: { text?: any }) => {
  return (
    <Stack className="" sx={{ p: 1 }}>
      {Object.values(text ?? "").map((item, i) => (
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          whileHover={{ x: 4 }}
          whileTap={{ x: 4 }}
          transition={{ delay: 1, duration: 0.3 * i }}
          viewport={{ once: true }}
        >
          <Box
            className=""
            key={i}
            sx={{
              display: "flex",
              lineHeight: 1,
              padding: "4px 0 0",
              gap: "10px",
            }}
          >
            <Box
              sx={{
                display: `${count && "none"}`,
                height: "16px",
                width: "16px !important",
                border: "0.5px solid",
                borderRadius: "50px",
              }}
            >
              <Typography
                className="center-self"
                sx={{
                  textAlign: "center",
                  fontSize: "9px",
                }}
              >
                {i + 1}
              </Typography>
            </Box>
            <Box
              className={`${count && "center-items"}`}
              sx={{
                width: `${count ? "100% !important" : "fit-content !important"}`,
              }}
            >
              <Typography
                sx={{
                  lineHeight: 1,
                  fontSize: "11px",
                  textAlign: `${count && "center"}`,
                }}
              >
                {item}
              </Typography>
            </Box>
          </Box>
        </motion.div>
      )) ?? ""}
    </Stack>
  );
};

export const HideOnScroll = ({
  children,
  target,
}: {
  children: React.ReactElement;
  target: any;
}) => {
  const trigger = useScrollTrigger({
    target,
  });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export const Loading = () => {
  const [open, setOpen] = useState(true);
  return (
    <Dialog
      open={open}
      fullScreen
      sx={{
        "& .MuiDialog-paper": {
          // bgcolor: "transparent",
          //color: '"primary.main',
        },
      }}
    >
      <Box className="vh center-items">
        <Box
          className=" center-self center-items"
          sx={{ width: "60% !important", display: "flex", gap: 1 }}
        >
          <RedAppleName center={true} />
          <TextContext center text="Creative Media" />
          <Box className="center-self">
            <CircularProgress sx={{ transform: "scale(0.5)" }} />
          </Box>
        </Box>

        <Box
          className=" p-abs"
          sx={{
            height: 130,
            // clipPath: "polygon(0 50%, 100% 0, 100% 50%, 0% 100%)",
            //bgcolor: "primary.main",
            color: "primary.contrastText",
            bottom: 20,
            width: "100%",
          }}
        >
          <HeadText text="Loading!" fs={12} center />
        </Box>
      </Box>
    </Dialog>
  );
};

interface InputProps {
  inputType: string | undefined;
  use: string | undefined;
  value: any | undefined;
  onChange: () => void | undefined;
  key: any | undefined;
  bgcolor: string | undefined;
}

export const MyInput = ({
  inputType,
  use,
  value,
  onChange,
  key,
  bgcolor,
}: InputProps) => {
  const [top, setTop] = useState(false);

  useState(() => {
    value.length > 0 && setTop(true);
  });
  return (
    <Box
      className="red center-items"
      sx={{
        height: "100%",
        borderRadius: "50px",
        bgcolor: !bgcolor ? "background.paper" : bgcolor,
        padding: "0 16px",
        "&:focus-within .placeholder": {
          transform: "translateY(-100%) ",
          border: "1px solid background.paper",
          bgcolor: "background.default",
          fontSize: "8px !important",
          filter: "opacity(1)",
          padding: "0px 10px",
          margin: "0 0 0 2% !important",
        },
        "&:active-within .placeholder": {
          display: "none",
        },
      }}
    >
      <Typography
        className="placeholder"
        sx={{
          fontSize: !value ? "10px !important" : "8px !important",
          position: "absolute",
          width: "fit-content",
          borderRadius: "50px",
          filter: !value ? "opacity(0.2)" : "opacity(1)",
          textAlign: "center !important",
          transitionDuration: "0.3s",
          transitionBehavior: "ease-in-out",
          transform: value && "translateY(-100%) ",
          border: value && "1px solid background.paper",
          bgcolor: value && "background.default",
          padding: value && "0px 10px",
        }}
      >
        {use}
      </Typography>
      <Box className="p-rel focus" sx={{ display: "block", height: "100%" }}>
        <Input
          type={inputType}
          value={value}
          onChange={onChange}
          sx={{
            fontSize: " 12px !important",
            width: "100% !important",
            height: "110% !important",
          }}
        />
      </Box>
    </Box>
  );
};

export const ActionButton = ({
  text,
  onClick,
  bgcolor,
}: {
  text: string;
  onClick?: () => void;
  bgcolor?: string;
}) => {
  return (
    <Box
      className="center-self p-rel"
      sx={{
        width: "fit-content",
        borderRadius: "50px !important",
        height: "100%",
        boxShadow: 3,
        bgcolor: !bgcolor ? "primary.main" : bgcolor,
      }}
    >
      <IconButton
        onClick={onClick}
        sx={{
          fontSize: "12px",
          fontWeight: "bolder",
          //color: "secondary.main",
          color: !bgcolor ? "primary.contrastText" : "text.secondary",
        }}
      >
        {text}
      </IconButton>
    </Box>
  );
};

interface MediaItem {
  group: {
    id: string;
    name: string;
    ext: string;
    src: string;
  };
}

export const LuiImage = ({
  src,
  srcset,
  i,
  key,
  ratio,
  cover,
}: {
  src: MediaItem[];
  srcset?: MediaItem[];
  i: number;
  key?: string | number;
  ratio?: number;
  cover?: boolean;
}) => {
  const [load, setLoad] = useState(false);
  const [index, setIndex] = useState(-1);

  const slides = srcset
    .filter((itm) => itm.ext === "webp")
    .map((itm) => ({ src: itm.src }));

  return (
    <Box
      key={key}
      className=" p-rel"
      sx={{ borderRadius: "4px", marginBottom: "8px !important" }}
    >
      <ImageListItem key={src.id} className="p-rel">
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
            key={src.id}
            src={src.src}
            loading="lazy"
            decoding="async"
            onLoad={() => setLoad(true)}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: load[src.id] ? 1 : 0,
              transition: "opacity 0.3s",
            }}
            onClick={() => setIndex(i)}
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

interface BgWraperProps {
  bgImage: string;
  children: React.ReactNode;
  overlay?: number;
  blur?: number;
}

interface LandingPAgeProp {
  children: React.ReactElement;
}
export const LandingPage = ({ children }: LandingPAgeProp) => {
  return (
    <>
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring", damping: 15 }}
        viewport={{ amount: 0.1, once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.1 }}
      >
        {children}
      </motion.div>
    </>
  );
};

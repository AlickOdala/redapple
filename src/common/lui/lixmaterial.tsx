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

const data = {
  Galley: {
    poster: ["Poster", "WEdding"],
    Fllyer: ["Promo", "wan"],
    FeedBack: {
      google: ["5 ster rewviw", "Birthday"],
      instagram: ["love the photos"],
    },
  },
  Settings: "0",
  Services: {
    Photograohy: ["wedding", "Portraits"],
  },
};

const RecursiveMenu = ({ items }: { items: string }) => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const handleClick = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <List disablePadding>
      {Object.entries(items).map(([key, value]) => {
        const isObject = typeof value === "object" && value !== null;
        const isOpen = openItems[key]; //

        if (isObject) {
          return (
            <Stack key={key} spacing={1}>
              <ListItemButton
                onClick={() => handleClick(key)}
                sx={{
                  //bgcolor: "secondary.main",
                  //color: "primary.main",
                  borderBottom: "0.5px solid grey",
                }}
              >
                <ListItemIcon>
                  {isOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemIcon>
                <ListItemText
                  primary={key}
                  sx={{
                    color: "",
                    "&.MuiListItemText-root": {
                      fontWeight: "bolder",
                    },
                  }}
                />
              </ListItemButton>

              <Collapse key={key} in={isOpen} timeout="auto" unmountOnExit>
                <List disablePadding className="">
                  {Object.keys(value).map((item) => (
                    <ListItemButton
                      sx={{
                        //color: "primary.main",
                        //bgcolor: "background.default",
                        //fontSize: "11px !important",
                        padding: "0 0 0 60px",
                      }}
                    >
                      <ListItemText
                        sx={{
                          fontSize: "11px !important",
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
            <Stack className="">
              <ListItemButton
                sx={{
                  //bgcolor: "secondary.main",
                  //color: "primary.main",
                  borderBottom: "0.5px solid grey",
                }}
              >
                <ListItemIcon />
                <ListItemText primary={key} />
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
          fontSize: `${!fs ? "40" : fs}px`,
          fontWeight: "bolder",
          color: color,
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
}: {
  text: string;
  fs?: number;
  sx?: any;
  className?: string;
  center?: boolean;
}) => {
  return (
    <Box className={className} sx={sx}>
      <Typography
        sx={{
          textAlign: `${center && "center"}`,
          lineHeight: 1,
          fontSize: { xs: `${fs ? fs : "12"}px`, sm: `${fs ? fs : "18"}px` },
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
}: {
  rootProp?: {};
  textProp?: {};
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: any;
  text?: string;
}) => {
  return (
    <Box className={className} onClick={onClick} sx={rootProp}>
      <IconButton className="" sx={textProp}>
        {text} {icon}
      </IconButton>
    </Box>
  );
};

export const BackgroundImage = styled(Box)({
  backgroundImage: "url(/images/bg.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
});

export const DataSelector = ({
  toFilter,
  filtered,
  bolder,
}: {
  toFilter: string;
  filtered: string;
  bolder: boolean;
}) => {
  const [filter, setFilter] = useState("");
  const [onFilter] = useState<string>(toFilter ?? []);

  return (
    <Stack
      className="debug red p-rel"
      sx={{
        alignContent: "center",
        flexWrap: "wrap",
        display: "flex",
        gap: 1,
      }}
      direction={"row"}
      spacing={2}
    >
      <Box className="grow p-rel" sx={{ justifyContent: "end !important" }}>
        <Box
          className=""
          sx={{
            width: "60px",
            borderRadius: `${bolder && "50px !important"}`,
            display: "flex",
          }}
        >
          <Box
            component="select"
            onChange={(e) => setFilter(e.target.value)}
            value={"Filter"}
            sx={{
              bgcolor: "transparent",
              color: "text.secondary",
              fontSize: "11px",
              maxWidth: "50px",
              outline: "unset !important",
              border: "none",
              height: "100%",
            }}
          >
            <Box component={"option"}>{"Filter"}</Box>
            {onFilter.map((cat) => (
              <Box component={"option"} key={cat} value={cat}>
                {cat}
              </Box>
            )) ?? "Search"}
          </Box>
        </Box>
      </Box>
      <Box className=" grow">
        <Typography
          sx={{
            fontSize: "11px",
            fontWeight: "bolder",
            textAlign: { sm: "center" },
          }}
        >
          View {filter} Photos
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
}: {
  link?: string;
  name?: String;
  linkTo?: string;
  text?: string;
}) => {
  const variant = {
    container: {
      display: "flex",
      lineHeight: 1,
      //margin: "4px !important",
      width:'100% !important',
      borderRadius: "8px",
        boxShadow: "0 0 4px #1212123c",
        padding:'2px !important'
      
    },

    icon: {
      transform: "scale(0.8)",
    },
    a: {
      textDecoration: "none !important",
      color: "inherit !important",
      outline: "unsert",
      height: "10px ",
      padding: "0 !important",
      margin: "auto !important",
      fontSize: "12px",
      fontWeight: "bolder",
      border: "unsert !important",
    },
    text: {
      fontWeight: "small !important",
      fontSize: "8px",
      padding: "0 8px",
      fontStyle: "italic",
    },
  };

  const icon = {
    whatsapp: <WhatsApp sx={variant.icon} />,
    call: <Call sx={variant.icon} />,
    x: <X sx={variant.icon} />,
    email: <Email sx={variant.icon} />,
    facebook: <Facebook sx={variant.icon} />,
    instagram: <Instagram sx={variant.icon} />,
    location: <LocationOn sx={variant.icon} />,
  };

  return (
    <Box className="" sx={variant.container}>
      <Box className="">{icon[name.toLocaleLowerCase()]}</Box>
      <Box className="">
        <Box
          component={"a"}
          href={link}
          className=" p-rel"
          sx={variant.a}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
          <Box className="" component={"span"} sx={variant.text}>
            Click to {text}
          </Box>
        </Box>

        <Typography className=" " sx={{ fontWeight: "bold", fontSize: "10px" }}>
          {linkTo}
        </Typography>
      </Box>
    </Box>
  );
};

export const TileContactItem = ({ data }: { data: any }) => {
  const variant = {
    tile: {
      height: 120,
      width: 120,
      alignItems: "center",
      borderRadius: "4px",
      bgcolor: "grey.50",
      color: "secondary.contrastText",
      padding: "8px 8px 16px",
      zIndex: 10,
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
      {data.slice(0, 4).map((item, i) => (
        <motion.div
          key={i}
          initial={{ x: -40 }}
          whileInView={{ x: 0 }}
          transition={{
            duration: 0.4 * i,
            delay: 0.3,
          }}
        >
          <Box
            className="p-rel 
          center-items"
            sx={variant.tile}
            component={"a"}
            href={item.link}
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
            <Box className=" center-items" sx={{ lineHieght: 1 }}>
              <Typography
                className="center-self"
                sx={{
                  lineHieght: 0.5,
                  fontSize: "11px",
                  fontWeight: "bolder",
                  textAlign: "center",
                }}
              >
                {item.linkTo}
              </Typography>
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
      ))}
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
          className="debug p-rel"
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
    <Stack className="debug" sx={{ p: 1 }}>
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
            className="debug"
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

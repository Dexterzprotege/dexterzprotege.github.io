import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      <span className="block text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Sharath Kamlekar. All Rights Reserved.
      </span>
    </Box>
  );
};

export default Footer;

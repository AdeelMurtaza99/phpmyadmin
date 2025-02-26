<?php
/**
 * Abstract class for the Bool2Text transformations plugins
 */

declare(strict_types=1);

namespace PhpMyAdmin\Plugins\Transformations\Abs;

use PhpMyAdmin\FieldMetadata;
use PhpMyAdmin\Plugins\TransformationsPlugin;

use function __;

/**
 * Provides common methods for all of the Bool2Text transformations plugins.
 */
abstract class Bool2TextTransformationsPlugin extends TransformationsPlugin
{
    /**
     * Gets the transformation description of the specific plugin
     */
    public static function getInfo(): string
    {
        return __(
            'Converts Boolean values to text (default \'T\' and \'F\').'
            . ' First option is for TRUE, second for FALSE. Nonzero=true.',
        );
    }

    /**
     * Does the actual work of each specific transformations plugin.
     *
     * @param string             $buffer  text to be transformed
     * @param array              $options transformation options
     * @param FieldMetadata|null $meta    meta information
     */
    public function applyTransformation($buffer, array $options = [], FieldMetadata|null $meta = null): string
    {
        $cfg = $GLOBALS['cfg'];
        $options = $this->getOptions($options, $cfg['DefaultTransformations']['Bool2Text']);

        if ($buffer == '0') {
            return $options[1]; // return false label
        }

        return $options[0]; // or true one if nonzero
    }

    /* ~~~~~~~~~~~~~~~~~~~~ Getters and Setters ~~~~~~~~~~~~~~~~~~~~ */

    /**
     * Gets the transformation name of the specific plugin
     */
    public static function getName(): string
    {
        return 'Bool2Text';
    }
}

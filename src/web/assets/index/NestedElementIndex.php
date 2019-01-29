<?php

/**
 * @copyright  Copyright (c) Flipbox Digital Limited
 * @license    https://github.com/flipboxfactory/craft-elements-nested-index/blob/master/LICENSE
 * @link       https://github.com/flipboxfactory/craft-elements-nested-index
 */

namespace flipbox\craft\elements\nestedIndex\web\assets\index;

use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;
use flipbox\craft\ember\web\assets\actions\Actions;

/**
 * @author Flipbox Factory <hello@flipboxfactory.com>
 * @since 1.0.0
 */
class NestedElementIndex extends AssetBundle
{
    /**
     * @inheritdoc
     */
    public function init()
    {
        $this->js = [
            'js/NestedElementIndex' . $this->dotJs(),
            'js/NestedElementIndexSelectInput' . $this->dotJs()
        ];

        $this->css = [
            'css/NestedElementIndex.css'
        ];

        parent::init();
    }

    /**
     * @inheritdoc
     */
    public $sourcePath = __DIR__ . '/dist';

    /**
     * @inheritdoc
     */
    public $depends = [
        CpAsset::class,
        Actions::class
    ];
}
